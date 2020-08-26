import React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import cookie from 'js-cookie';
import fetch from 'isomorphic-unfetch';
import getHost from './get-host';
import { ROLE_NAME } from '../constants';
import { getUserInfo } from './author';
import CtxContext from '../rcontext/CtxContext';

function login ({ __vut, __uif }) {
  cookie.set('__vut', __vut, { expires: new Date(__uif.exp * 1000) });
  window.localStorage.setItem('__uif', JSON.stringify(__uif));
  switch (__uif.role) {
    case ROLE_NAME.ROLE_INTERNAL:
      Router.push('/internal/freight-rates');
      break;
    case ROLE_NAME.ROLE_BCO:
      Router.push('/active-quotes');
      break;
    default:
      break;
  }
}

function logout () {
  cookie.remove('__vut');
  Router.push('/login');
}

const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component';

function withAuthSync (WrappedComponent) {
  return class extends React.Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps (ctx) {
      const { __vut } = nextCookie(ctx);
      const __uif = getUserInfo(__vut);

      /*
      * If `ctx.req` is available it means we are on the server.
      */
      if (ctx.req && !__vut) {
        ctx.res.writeHead(302, { Location: '/login' })
        ctx.res.end();
      }

      // We already checked for server. This should only happen on client.
      if (!__vut) {
        Router.push('/login');
      }

      // const __uif = getUserInfo(__vut);
      if (ctx.req && ctx.req.url != '/' && ((ctx.req.url.includes("internal") && __uif.role !== ROLE_NAME.ROLE_INTERNAL)
        || (!ctx.req.url.includes("internal") && __uif.role === ROLE_NAME.ROLE_INTERNAL))
      ) {
        ctx.res.writeHead(302, { Location: '/' })
        ctx.res.end();
      }

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));
      return { ...componentProps, __vut, __uif }
    }

    render () {
      return (
        <CtxContext.Provider value={{ userAgent: this.props.userAgent }}>
          <WrappedComponent {...this.props} />
        </CtxContext.Provider>
      )
    }
  }
}

async function authInitial(ctx, endpoint) {
  const { __vut } = nextCookie(ctx);
  let apiUrl = getHost(ctx.req) + endpoint;
  if (ctx.query) {
    var esc = encodeURIComponent;
    var query = Object.keys(ctx.query)
      .map(k => esc(k) + '=' + esc(ctx.query[k]))
      .join('&');
    apiUrl = `${apiUrl}?${query}`
  }
  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: __vut
      }
    })
    if (response.ok) {
      const test = await response.json();
      return {
        ...test,
        __vut,
        userAgent: ctx.req && ctx.req.headers['user-agent']
      };
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (error) {
    return {
      msgErr: error
    };
  }
}

function getAuthHeader(__vut) {
  const userInfo = getUserInfo(__vut);
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
  }
}

export {
  login,
  logout,
  withAuthSync,
  authInitial,
  getAuthHeader
}