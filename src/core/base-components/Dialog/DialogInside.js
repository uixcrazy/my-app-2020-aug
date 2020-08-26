import React from "react";
import withStyles from "react-jss";

const DialogInside = ({
  classes,
  onClose,
  style,
  customClass,
  children
 }) => {
  const dialogStyle = [classes.dialog];
  if (customClass) dialogStyle.push(customClass);

  return children ? (
    <div className={dialogStyle.join(" ")} style={style}>
      <div className={classes.backdrop} onClick={onClose}/>
      {children}
    </div>
  ) : null;
 }

const styles = {
  dialog: {
    position: "absolute",
    zIndex: 1300,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    position: "absolute",
    overflow: "auto",
    zIndex: -1,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent",
  },
};

export default withStyles(styles)(DialogInside);
