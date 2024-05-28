import React from 'react'
import { LayoutPrincipal } from '../layouts/LayoutPrincipal'
import { Charp } from '../components/home/charp'
import { Timeli } from '../components/home/time-line'
import { TablaClientHome } from '../components/home/TablaClientHome'

export const Home = () => {
  return (

    <LayoutPrincipal id="menu" >


<Charp></Charp>
<Timeli></Timeli>
<TablaClientHome></TablaClientHome>



    </LayoutPrincipal>
  )
}
