import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaOtros } from '../components/otrosServicios/TablasOtros'
import { NuevoClienteOtros } from '../components/otrosServicios/NuevoClienteOtros'
import { Breadcrumb } from 'antd'
import { HomeOutlined, UserOutlined ,ToolFilled} from '@ant-design/icons';



export const ListaOtros = () => {
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
        title: 'Otros servicio',
      },
    ]}
  />
<TablaOtros></TablaOtros>
<NuevoClienteOtros></NuevoClienteOtros>
    </LayoutPrincipal>
  )
}
