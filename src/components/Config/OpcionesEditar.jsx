import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const items = [
  {
    label: <a href="">Editar</a>,
    key: '0',
  },
  {
    label: <a href="">Elimnar</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Modificar',
    key: '3',
  },
];
export const Opciones = () => (
  <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Click me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
)
