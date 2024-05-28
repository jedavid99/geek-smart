import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaPC } from '../components/servicioPc/TablaPC';
import '../App.css';
import { NuevoClientePc } from '../components/servicioPc/NuevoClientePc';



export const ListaPC = () => {
  return (

    <LayoutPrincipal >
 
<TablaPC></TablaPC>

<NuevoClientePc></NuevoClientePc>


    </LayoutPrincipal>
  )
}
