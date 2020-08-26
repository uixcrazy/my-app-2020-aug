import React from 'react';
import * as icons from 'icons';

export default {
  title: 'icons/Kiwi Icons',
};

export const KiwiIcons = () => (
  <div>
    {Object.keys(icons).map(key => {
      const Icon = icons[key];
      return (
        <div key={key}>
          <Icon />&ensp; &emsp;
          <span>&lt;{key} &frasl;&gt;</span>
        </div>
      )
    })}
  </div>
)

KiwiIcons.story = {
  name: 'default',
};
