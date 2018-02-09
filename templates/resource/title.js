import React from 'react';

export const {{pascalCased}}Title = ({ record }) => {
  return <span>{{pascalCased}} {record ? `"${record.title}"` : ''}</span>;
};
