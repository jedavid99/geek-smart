import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';
import { Charpclien } from '../components/home/charp-clien';
import { Charp } from '../components/home/charp';
import { TablaReport } from '../components/Report/TablaReport';
import { PrinterOutlined } from '@ant-design/icons';
import { EstadisticaRerpo } from '../components/Report/EstaditicaReport';
import { Timeli } from '../components/home/time-line';

import { Button ,Space, Row, Col} from "antd";



export const Reportes = () => {
  return (
<div>
    
    <LayoutPrincipal >
        
    

    <br />


    
   <EstadisticaRerpo></EstadisticaRerpo>
   <Timeli></Timeli>

    </LayoutPrincipal>
    </div>
  )
}
