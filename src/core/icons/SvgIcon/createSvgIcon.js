import React from 'react';
import SvgIcon from './SvgIcon';

function createSvgIcon(path, displayName) {
  let Icon = props => (
    <SvgIcon {...props}>
      {path}
    </SvgIcon>
  );

  Icon.displayName = `${displayName}Icon`;
  Icon = React.memo(Icon);
  return Icon;
};

export default createSvgIcon;
