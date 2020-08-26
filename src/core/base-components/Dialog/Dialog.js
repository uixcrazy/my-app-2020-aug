import React from "react";
import ReactDOM from "react-dom";
import withStyles from "react-jss";
import getScrollbarWidth from "utils/get-scrollbar-width";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    const _body = document.body;
    const scrollbarWidth = getScrollbarWidth();
    this.preDocumentOverflow = document.documentElement.style.overflow;
    this.preBodyOverflow = _body.style.overflow;
    this.preBodyPaddingRight = _body.style.paddingRight;
    document.documentElement.style.overflow = "hidden";
    _body.style.overflow = "hidden";
    _body.style.paddingRight = `${scrollbarWidth}px`;
    this.el.setAttribute("style", this.props.modalStyle || `
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1305;
      padding: 10px;

      display: flex;
      align-items: center;
      justify-content: center;
    `);
    _body.appendChild(this.el);
  }

  componentWillUnmount() {
    const _body = document.body;
    _body.removeChild(this.el);
    document.documentElement.style.overflow = this.preDocumentOverflow;
    _body.style.overflow = this.preBodyOverflow;
    _body.style.paddingRight = this.preBodyPaddingRight;
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class BasicDialog extends React.Component {
  render() {
    const {
      classes,
      onClose,
      children,
      backdropClass,
      backdropStyle,
      modalStyle, // css by string AND replace all not a partial
    } = this.props;
    const _backdropClass = [classes.backdrop];
    if (backdropClass) _backdropClass.push(backdropClass);

    return children ? (
      <Modal modalStyle={modalStyle}>
        {children}
        <div className={_backdropClass.join(" ")} style={backdropStyle} onClick={onClose}/>
      </Modal>
    ) : null
  }
}

const styles = {
  backdrop: {
    position: "absolute",
    overflow: "auto",
    zIndex: -1,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    WebkitTapHighlightColor: "transparent",
  },
};

export default withStyles(styles)(BasicDialog);
