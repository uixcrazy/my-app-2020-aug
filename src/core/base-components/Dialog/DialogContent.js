import React from "react";
import withStyles from "react-jss";

const DialogContent = ({
  classes,
  style,
  customClass,
  onClose,
  children,
}) => {
  const dialogContentStyle = [classes.dialogContent];
  if (customClass) dialogContentStyle.push(customClass);

  return (
    <div className={dialogContentStyle.join(" ")} style={style}>
      <div className={classes.dialogCt}>
        {children}
      </div>
      <button type="button" className={classes.btnClose} onClick={onClose}>
        <svg
          width="10px" height="8px" viewBox="0 0 10 8"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5,4 L9,0 L5,4 L9,8 L5,4 Z M5,4 L1,8 L5,4 L1,0 L5,4 Z" stroke="#BEB3AB"></path>
        </svg>
      </button>
    </div>
  )
};

const styles = {
  dialogContent: {
    position: "relative",
    display: "flex",
    border: "1px solid #EBEFF0",
    width: "auto",
    height: "auto",
    maxHeight: "95%",
    boxShadow: "0 6px 24px 0 rgba(49,54,56,0.1)",
    backgroundColor: "#fff",
    padding: "10px",
    overflow: "hidden",
    borderRadius: 2,
    '& *::-webkit-scrollbar': {
      width: 5,
      height: 8,
    },
    '& *::-webkit-scrollbar-track': {
      backgroundColor: "#eee",
    },
    '& *::-webkit-scrollbar-thumb': {
      backgroundColor: "#ccc",
    },
    '& *::-webkit-scrollbar-thumb:hover': {
      backgroundColor: "cyan",
    },
  },
  dialogCt: {
    overflowX: "hidden",
    overflowY: "auto",
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnClose: {
    position: "absolute",
    background: "transparent",
    top: 10,
    right: 8,
    border: 0,
  }
}

export default withStyles(styles)(DialogContent);
