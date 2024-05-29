import React from 'react';
import { Avatar, List ,Dropdown ,Button} from 'antd';
import { Opciones } from './OpcionesEditar';
const data = [
  {
    title: 'camila',
    usuario:"camila343@gmail.com",
  },
  {
    title: 'daniel perez',
    usuario:"daniel343@gmail.com",

  },
  {
    title: 'camilo mesa',
    usuario:"camilo343@gmail.com",

  },
 
];
export const ListaUsuario = () => (
  <List   header={<div>Usuarios</div>}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item >
        
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="">{item.title}</a>}
          description={item.usuario}
          
        />
        <Opciones></Opciones>
     </List.Item>
    )}
  />
  
)
