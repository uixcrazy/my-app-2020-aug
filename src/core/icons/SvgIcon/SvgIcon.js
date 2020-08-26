import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

const SvgIcon = React.forwardRef(function SvgIcon(props, ref) {
  const {
    children,
    classes,
    className,
    titleAccess,
    viewBox,
    color,
    style,
    fontSize,
  } = props;

  const rootClass = [classes.root];
  if (className) rootClass.push(className);

  return (
    <svg
      style={style}
      className={rootClass.join(" ")}
      focusable="false"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
      color={color}
      fontSize={fontSize}
      aria-hidden={titleAccess ? 'false' : 'true'}
      role={titleAccess ? 'img' : 'presentation'}
      ref={ref}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
  );
});

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired, /* Node passed into the SVG element. */
  classes: PropTypes.object,
  className: PropTypes.string,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string,
  fontSize: PropTypes.number,
};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
  fontSize: 24,
};

export default withStyles({
  root: {
    fill: 'currentColor', // base on this color
    width: '1em', // base on this font-size
    height: '1em', // base on this font-size

    userSelect: 'none',
    display: 'inline-block',
    flexShrink: 0,
  }
})(SvgIcon)


// How to use
/**

import React from 'react';
import SvgIcon from '../svg-icon';

export default (props) => {
  return (
    <SvgIcon
      viewBox="0 0 15 18"
      fontSize="18px"
      color="cyan"
      {...props}
    >
      <path d="M5.5,...  Z"></path>
    </SvgIcon>
  );
};

*/

