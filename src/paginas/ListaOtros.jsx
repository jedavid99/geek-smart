import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { TablaOtros } from '../components/otrosServicios/TablasOtros'
import { NuevoClienteOtros } from '../components/otrosServicios/NuevoClienteOtros'



export const ListaOtros = () => {
  return (

    <LayoutPrincipal >
<TablaOtros></TablaOtros>
<NuevoClienteOtros></NuevoClienteOtros>
    </LayoutPrincipal>
  )
}
