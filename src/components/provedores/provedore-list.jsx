
import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import { Flobott } from './provedor-agre';
const columns = [
  {
    title: 'Provedores',
    dataIndex: 'provedores',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Categoria',
    dataIndex: 'categoria',
  },
  {
    title: 'Numero de telefono',
    dataIndex: 'NumeroDtelefono',
  },
  {
    title: 'dirrecion',
    dataIndex: 'dirrecion',
  },
];
const data = [
  {
    key: '1',
    provedores: 'John Brown',
    categoria: 'telefono',
    NumeroDtelefono: 1151747883,
    dirrecion: 'capital 34 av'
  },
  {
    key: '2',
    provedores: 'Jim Green',
    categoria: 'pc',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
  },
  {
    key: '3',
    provedores: 'Joe Black',
    categoria: 'pc',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
  },
  {
    key: '4',
    provedores: 'Disabled User',
    categoria: 'varios',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
  },
  {
    key: '4',
    provedores: 'Disabled User',
    categoria: 'telefono',
    NumeroDtelefono: 1151747883,
    dirrecion:'capital 34 av',
  },
  
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};



export const Provelist = () => {
  const [selectionType, setSelectionType] = useState('checkbox');
  return (
    <div>
      

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />























    </div>
  )
}
