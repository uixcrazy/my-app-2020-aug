import React from 'react';

export default ({ className, src, alt }) => {
  function addDefaultSrc(ev) {
    ev.target.src = '/no-img.svg'
  }
  return (
    <img
      className={className}
      src={src || "/no-img.svg"}
      onError={addDefaultSrc}
      alt={alt || "No Image"}
    />
  );
};
