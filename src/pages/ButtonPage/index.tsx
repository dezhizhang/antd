/*
 * :file description: 
 * :name: /antd/src/pages/ButtonPage/index.tsx
 * :author: 张德志
 * :copyright: (c) 2021, Tungee
 * :date created: 2021-06-13 18:25:10
 * :last editor: 张德志
 * :date last edited: 2021-06-14 09:18:38
 */

import { Button } from 'antd';
import React  from 'react';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';
  
const ButtonPage: React.FC = () => {
    return (
        <div>
            <Button type="primary">按钮</Button>
            <PlusOutlined/>
        </div>
    )
} 

export default ButtonPage;