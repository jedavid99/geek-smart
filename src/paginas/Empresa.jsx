import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';

import { DatosEmpresa } from '../components/Config/DatosEmpresa';
import { MapComponent } from '../components/Config/Maps';
import { BotonConfigEmpres } from '../components/Config/Empresa/BotonConfigEmpres';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined ,SettingFilled} from '@ant-design/icons';


export const Empresa = () => {
  return (
<div>
    
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
            <SettingFilled />
            <span>Configuracion</span>
          </>
        ),
      },
      {
        title: 'Empresa',
      },
    ]}
  />

    <DatosEmpresa></DatosEmpresa>
    <BotonConfigEmpres></BotonConfigEmpres>

    </LayoutPrincipal>
    </div>
  )
}
