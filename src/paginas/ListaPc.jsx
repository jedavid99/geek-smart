import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaPC } from '../components/servicioPc/TablaPC';
import '../App.css';
import { NuevoClientePc } from '../components/servicioPc/NuevoClientePc';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined ,ToolFilled} from '@ant-design/icons';




export const ListaPC = () => {
  return (

    <LayoutPrincipal >
 <Breadcrumb
    items={[
      {
        href: '/home',
        title: <HomeOutlined />,
      },
      {
        
        title: (
          <>
            <ToolFilled />
            <span>Servicio</span>
          </>
        ),
      },
      {
        title: 'Pc',
      },
    ]}
  />
<TablaPC></TablaPC>

<NuevoClientePc></NuevoClientePc>


    </LayoutPrincipal>
  )
}
