import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';
import { Charpclien } from '../components/home/charp-clien';
import { Charp } from '../components/home/charp';
import { TablaReport } from '../components/Report/TablaReport';
import { PrinterOutlined } from '@ant-design/icons';
import { EstadisticaRerpo } from '../components/Report/EstaditicaReport';
import { Timeli } from '../components/home/time-line';
import { HomeOutlined, UserOutlined ,FilePdfFilled} from '@ant-design/icons';


import { Button ,Space, Row, Col, Breadcrumb} from "antd";



export const Reportes = () => {
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
            <FilePdfFilled />
            <span>Reportes</span>
          </>
        ),
      },
      
    ]}
  />

    <br />


    
   <EstadisticaRerpo></EstadisticaRerpo>
   <Timeli></Timeli>

    </LayoutPrincipal>
    </div>
  )
}
