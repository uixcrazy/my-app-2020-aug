
import React from 'react';
import PropTypes from 'prop-types';
import injectStyle  from 'react-jss';

class Dropdown extends React.Component {
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
      this.props.onHide();
    }
  }

  handleChange = () => {
    const { focused } = this.state;
    if (focused === false) {
      this.setState({ focused: true });
      this.props.onShow();
    } else {
      this.setState({ focused: false });
      this.props.onHide();
    }
  }

  toggle(show = true){
    this.setState({focused: show});
  }

  render() {
    const {
      classes,
      className,
      classNameSelect,
      classNameDropbox,
      style,
      label,
    } = this.props;
    const { focused } = this.state;

    const wrapperClass = [classes.wrapper];
    if (className) wrapperClass.push(className);

    const dropdownSelectClass = [classes.dropdownSelect];
    if (focused) dropdownSelectClass.push("focused");
    if (classNameSelect) dropdownSelectClass.push(classNameSelect);

    const dropdownCtClass = [classes.dropdownCt];
    if (classNameDropbox) dropdownCtClass.push(classNameDropbox);

    return (
      <div
        style={style}
        className={wrapperClass.join(" ")}
        ref={node => this.dropdownRef=node}
      >
        <div
          className={dropdownSelectClass.join(" ")}
          onClick={this.handleChange}
        >
          {label} <i className="arrow" />
        </div>
        { focused &&
          <div className={dropdownCtClass.join(" ")}>
            {this.props.children}
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
  dropdownSelect: {
    cursor: 'pointer',
    userSelect: 'none',
    height: '2.25rem',
    borderRadius: 2,
    border: 'solid 1px var(--color-border)',
    backgroundColor: 'var(--white)',
    lineHeight: 1,
    paddingLeft: '0.5rem',
    position: 'relative',
    transition: '100ms linear all',
    background: '#fff',
    // fontSize: "12px",
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
  dropdownCt: {
    position: 'absolute',
    width: '100%',
    zIndex: 99,
    borderRadius: 2,
    marginTop: '1px',
    boxShadow: '0 1px 5px #eee',
    border: 'solid 1px var(--color-border)',
    backgroundColor: '#fff',
    // marginTop: '-1px',
    '& ul': {
      padding: '5px 0',
      '& li':{
        padding: '0.5rem',
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        '&.active': {
          cursor: 'default',
          opacity: .5,
        },
        '&:last-child': {
          borderBottom: 0,
        },
        "&:hover:not(.active)": {
          background: "#f4f4f4",
          // color: 'var(--a1)',
        }
      }
    },
  },
};

Dropdown.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  style: PropTypes.object,
  className: PropTypes.string,
  classNameContainer: PropTypes.string,
  classNameSelect: PropTypes.string,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
};

Dropdown.defaultProps = {
  onHide: () => {},
  onShow: () => {},
}

// ⇣ ⇣ ⇣    injectStyle({})(Dropdown);
const DropdownUI = ((Component) => {
  const InnerRef = ({innerRef, ...props}) => <Component ref={innerRef} {...props} />;
  React.forwardRef((props, ref) => <InnerRef {...props} innerRef={ref}/>)
  return InnerRef;
})(Dropdown);

export {DropdownUI as Dropdown};
export default injectStyle(style)(Dropdown);
