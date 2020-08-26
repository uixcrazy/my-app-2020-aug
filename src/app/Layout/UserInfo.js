
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import {logout} from "../../helpers/utils/auth";

class UserInfo extends React.Component {
  state = {
    focused: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, false);
  }

  handleClickOutside = (event) => {
    if (this.state.focused && this.dropdownRef
      && (!this.dropdownRef.contains(event.target) && document.body.contains(event.target))
    ) {
      this.setState({ focused: false });
    }
  }

  handleChange = () => {
    const { focused } = this.state;
    if (focused === false) {
      this.setState({ focused: true });
    } else {
      this.setState({ focused: false });
    }
  }

  toggle(show = true){
    this.setState({focused: show});
  }

  render() {
    const {
      classes,
      style,
    } = this.props;
    const { focused } = this.state;
    const userInfo = process.browser ? JSON.parse(localStorage.getItem('__uif')) : {};

    return (
      <div
        style={style}
        className={classes.wrapper}
        ref={node => this.dropdownRef=node}
      >
        <div
          className={classes.content}
          onClick={this.handleChange}
        >
          <img
            className={classes.avatar}
            src="/static/avatar_default.svg"
            alt=""
          />
            <span className={classes.username}>
              {/* {userInfo && userInfo.role && userInfo.role + " : "} */}
              {userInfo && userInfo.username}
            </span>
          <i className="arrow" />
        </div>
        { focused &&
          <div className={classes.dropdownCt}>
            <button
              type="button"
              className={classes.btnSignout}
              onClick={() => logout()}
            >
              Sign out
            </button>
          </div>
        }
      </div>
    );
  }
}

const style = {
  wrapper: {
    position: 'relative',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: '25px',
    "& .arrow": {
      width: '0',
      height: '0',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '5px solid #999',
      position: 'absolute',
      top: 'calc(50% - 2px)',
      right: '8px',
      transition: '200ms linear all',
    },
    '&.focused': {
      '& .arrow': {
        transform: 'rotate(-180deg)',
      },
    },
  },
  avatar: {
    height: '2.5rem',
    width: '2.5rem',
    opacity: .2,
  },
  username: {
    marginLeft: '0.5rem',
  },
  btnSignout: {
    color: 'var(--color-text)',
    display: 'block',
    padding: '15px 10px',
    fontSize: '0.875rem',
    width: '100%',
    textAlign: 'left',
    '&:hover': {
      color: 'var(--color-text-darker)',
      backgroundColor: '#f5f5f5',
    }
  },
  dropdownCt: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    borderRadius: 2,
    marginTop: '10px',
    boxShadow: '0 1px 5px #eee',
    border: 'solid 1px var(--color-border)',
    backgroundColor: '#fff',
    minWidth: 120,
  },
};

UserInfo.propTypes = {
  classes: PropTypes.object,
  style: PropTypes.object,
};

export default withStyles(style)(UserInfo);
