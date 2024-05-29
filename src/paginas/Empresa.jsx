import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import '../App.css';

import { DatosEmpresa } from '../components/Config/DatosEmpresa';
import { MapComponent } from '../components/Config/Maps';
import { BotonConfigEmpres } from '../components/Config/Empresa/BotonConfigEmpres';

export const Empresa = () => {
  return (
<div>
    
    <LayoutPrincipal >
        
    

    <DatosEmpresa></DatosEmpresa>
    <BotonConfigEmpres></BotonConfigEmpres>

    </LayoutPrincipal>
    </div>
  )
}
