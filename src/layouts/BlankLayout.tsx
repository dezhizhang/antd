/*
 * :file description: 
 * :name: /antd/src/layouts/BlankLayout.tsx
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-06-13 17:51:47
 * :last editor: 张德志
 * :date last edited: 2021-06-13 17:53:05
 */
import React from 'react';
import { Inspector } from 'react-dev-inspector';

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

const Layout: React.FC = ({ children }:any) => {
  return <InspectorWrapper>{children}</InspectorWrapper>;
};

export default Layout;
