import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaTelefonos } from '../components/servicioTelefonos/TablasTelefono'
import { NuevoClienteTele } from '../components/servicioTelefonos/NuevoClienteTele'
import '../App.css';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined ,ToolFilled} from '@ant-design/icons';



export const ListaTelefono = () => {
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
        title: 'Telefonos',
      },
    ]}
  />
<TablaTelefonos></TablaTelefonos>
 <NuevoClienteTele></NuevoClienteTele>


    </LayoutPrincipal>
  )
}
