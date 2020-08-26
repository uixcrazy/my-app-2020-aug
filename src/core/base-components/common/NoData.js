import React from "react";
import PropTypes from "prop-types";
import withStyles from 'react-jss';

const NoData = ({
  classes,
  wrapperClass,
  contentClass,
  style,
  children
}) => {
  const _wrapperClass = [classes.wrapper];
  if (wrapperClass) _wrapperClass.push(wrapperClass);

  const _contentClass= [classes.content];
  if (contentClass) _contentClass.push(contentClass);

  return (
    <div className={_wrapperClass.join(" ")} style={style}>
      <div className={_contentClass.join(" ")}>
        {children || "Data not available"}
      </div>
    </div>
  );
};

NoData.propTypes = {
  classes: PropTypes.object,
  wrapperStyle: PropTypes.shape({}),
  wrapperClass: PropTypes.shape({}),
  contentClass: PropTypes.shape({}),
};

const styles = {
  wrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    fontSize: 'initial',
    color: "#999",
    fontSize: 22,
    // margin: "auto",
    // textAlign: 'center',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
}

export default withStyles(styles)(NoData);
