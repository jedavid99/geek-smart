import React, { useRef, useState } from 'react';
import { Space, Table, Tag, Form, Input, Select, Button, Dropdown, Tooltip } from 'antd';
import { CheckCircleOutlined,  ClockCircleOutlined, SyncOutlined, PrinterOutlined ,SearchOutlined} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const onMenuClick = (e) => {
  console.log('click', e);
};
const items = [
  
  {
    key: '3',
    label: 'Editar',

  },
  {
    key: '2',
    label: 'Eliminar',

  },

];
const data = [
  
  {
    key: '1',
    ordendeservicio: '01',
    nombre: 'daniel ortega',
    dni:'9634468',
    usuario: 'danel8y88',
    estadotele: <Tag icon={<ClockCircleOutlined />} color="warning">Presupuestar</Tag>,
    cargo: 'tecnico jefe',
    rol:'usuario',
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>

  },
  {
    key: '2',
    ordendeservicio: '02',
    dni:'9634468',
    nombre: 'Jim Green',
    usuario: 'jinw3e',
    estadotele: <Tag icon={<CheckCircleOutlined />} color="success">Entregado</Tag>,
    cargo:'tecnico jefe',
    rol:'admin',
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>,


  },
  {
    key: '3',
    ordendeservicio: '03',
    dni:'9634468',
    nombre: 'Joe Black',
    usuario: 'joe878',
    descriccion: "cambio de pin de carga",
    estadotele: <Tag icon={<CheckCircleOutlined />} color="success">Entregado</Tag>,
    cargo :'tecnico jefe',
    rol:'admin',
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>,


  },
  {
    key: '4',
    ordendeservicio: '04',
    dni:'96374468',
    nombre: 'samuel luna',
    usuario: 'ssamu98',
    estadotele: <Tag icon={<SyncOutlined />} color="processing">Reparado</Tag>,
    cargo: 'tecnico jefe',
    rol:'usuario',
     descriccion: "cambio de microfono",
    opciontele: <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      opciones
    </Dropdown.Button>,
    


  },
];
export const TablaUsuarios= () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters,  }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Buscar por orden de servicio`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Buscar
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Limpiar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Restablecer
          </Button>
         
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
  const columns = [
    {
      title: 'Nombre y Apellido',
      dataIndex: 'nombre',
      ...getColumnSearchProps('ordendeservicio'),

    },
    {
        title: 'DNI',
        dataIndex: 'dni',
        ...getColumnSearchProps('dni'),
  
      },
    {
        title: 'Usuario',
        dataIndex: 'usuario',
      },
    

  
  
    {
      title: 'Rol',
      dataIndex: 'rol',
      
    },
    {
      title: 'Cargo',
      dataIndex: 'cargo',
    },
    
    
    {
      title: 'Opciones',
      dataIndex: 'opciontele',
    },
  ];
  
  

  
  
  
  return <div>
  
  <Table columns={columns}
 dataSource={data} />;

</div>
}
