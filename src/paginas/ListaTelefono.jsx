import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaTelefonos } from '../components/servicioTelefonos/TablasTelefono'
import { NuevoClienteTele } from '../components/servicioTelefonos/NuevoClienteTele'
import '../App.css';



export const ListaTelefono = () => {
  return (

    <LayoutPrincipal >



<TablaTelefonos></TablaTelefonos>
 <NuevoClienteTele></NuevoClienteTele>


    </LayoutPrincipal>
  )
}
