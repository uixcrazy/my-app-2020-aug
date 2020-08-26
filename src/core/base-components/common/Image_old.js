import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  static propTypes = {
    defaultSrc: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.object,
    style: PropTypes.shape({}),
  };
  static defaultProps = {
    defaultSrc: 'static/avatar_default.svg',
    src: "",
    alt: "No Image",
    style: {}
  };

  state = {
    src: this.props.src,
  }

  onImgError = () => {
    this.setState({
      src: this.props.defaultSrc,
    });
  }

  render() {
    const { className, style, alt } = this.props;
    return (
      <img
        className={className}
        style={style}
        src={ this.state.src || this.props.defaultSrc }
        onError={ this.onImgError.bind(this) }
        alt={alt || "No Image"}
      />
    );
  }
}

export default Image;
