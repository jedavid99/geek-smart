<div className="flex overflow-hidden bg-white rounded-lg">
    <div className="hidden md:flex flex-col w-64 bg-gray-800" id='sidebar'>
        <div className="flex flex-col w-64" >
            <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-indigo-700 border-r">
                <div className="flex flex-col items-center flex-shrink-0 px-4">
                        <div className="ml-3">
                                <p className="text-lg font-medium text-white">Bienvenido  { props.usu.toUpperCase() }</p>
                            </div>
                            
                </div>
                <div className="flex flex-col flex-grow px-4 mt-5">
                    <nav className="flex-1 space-y-1 bg-indigo-700">
                        <ul>
                             <li>
                                <NavLink to="" className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600" onClick={ op_registrar } > <span className="ml-4">Registrar</span></NavLink>
                                      </li>
                            <li>
                                 <NavLink to="" className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"    onClick={ op_estadistica } > <span className="ml-4">Dashboard</span></NavLink>
                                      </li>
                            <li>
                                <NavLink to="" className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"  onClick={ op_registrar } > <span className="ml-4">Precio</span></NavLink>
                          </li>
                            <li>
                            <NavLink to="" className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600"   onClick={ op_listar } > <span className="ml-4">Clientes</span></NavLink>
                            </li>
                        </ul>
                        <p className="px-4 pt-2 text-white ">Servicio</p>
                        <ul>
                            <li>
                                <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600" white=""  href="#">
                                    <span className="ml-4"> telefono</span>
                                </a>
                            </li>
                            <li>
                                <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600" white="" href="#">
                                    <span className="ml-4"> pc</span>
                                </a>
                            </li>
                            <li>
                                <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600" white="" href="#">
                                    <span className="ml-4"> otros</span>
                                </a>
                            </li>
                            <li>
                                <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600" href="#">
                                    <span className="ml-4">configuracion</span></a>
                            </li>
                            <li>
                                <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-indigo-800 rounded-lg hover:border-indigo-800 focus:shadow-outline hover:bg-indigo-600" white=""  href=" "  onClick={ cerrarSesion } >
                                    <span className="ml-4">Cerrar Seccion</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-shrink-0 p-4 px-4 bg-indigo-600">
                    <a href="#" className="flex-shrink-0 block w-full group">
                        <div className="flex items-center">
                            <div>
                                 <img className="h-10 w-10 rounded-full mx-auto h-23 w-auto space-y-6" src={Logo}></img>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-white">GEEK SMART</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="flex flex-col flex-1 w-0 overflow-hidden">
        
    <div className="bg-black shadow">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center py-4 px-2">
                        <button className="text-gray-500 hover:text-gray-600" id="open-sidebar">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    </div>
                </div>
            </div>
        <main className="container mx-auto  overflow-y-auto focus:outline-none">
        <h1 className="text-lg text-neutral-600">
                            { reg === "1" && <Registrar/> }
                            { lis === "1" && <Listar/>}
                            { est === "1" && <Estadistica/> }</h1>
            <div className="py-6">
                            <Registrar/>                               
            </div>
        </main>
    </div>
</div>












import React, { useState, useEffect } from 'react'

export const Listar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const botonEliminar = (miIndex) => {
    if(window.confirm("¿Está Seguro De Querer Eliminar El Registro?")){
      var registrosFiltrados = registroslogin.filter((e, index) => {
          return miIndex !== index
      });
      setRegistrosLogin(registrosFiltrados);
    }
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin])



  return (
    

    
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado De Registro De Pinturas
    </div>

    <div className="table-responsive">
      
      { registroslogin.length > 0 ? 

      <>
        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Estilo</th>
                    <th>Tecnica</th>
                    <th>Precio</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
                {
                  registroslogin.map((x, index) => (
                    <tr key={index}>
                      <th>{ index+1 }</th>
                      <td>{ x.titulo }</td>
                      <td>{ x.estilo }</td>
                      <td>{ x.tecnica }</td>
                      <td>{ x.precio }</td>
                      <td className="text-center">
                        <button className="btn btn-outline-danger" onClick={()=>botonEliminar(index)}>
                          <i classNam="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
      </> 
      
      : <p className='h5' style={{color:"red"}}>"No Hay Registros Para Listar"</p>
      }
      
    </div>
 
  </div>



  )
}



import React, { useState, useEffect } from 'react'





export const Listar = () => {

  


  return (
    

    
    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Listado De Registro De Pinturas
    </div>

    <div className="table-responsive">
      
      

      <>
        <table className="table table-bordered table-hover" style={{marginTop:12}}>
            <thead className="text-center" style={{background:"lightgray"}}>
                <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Estilo</th>
                    <th>Tecnica</th>
                    <th>Precio</th>
                    <th>X</th>
                </tr>
            </thead>
            <tbody className="text-center align-baseline">
               
                
                    <tr >
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="text-center">
                        <button className="btn btn-outline-danger" onClick={()=>botonEliminar(index)}>
                          <i classNam="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                
            </tbody>
        </table>
      </> 
      
      : <p className='h5' style={{color:"red"}}>"No Hay Registros Para Listar"</p>
     
      
    </div>
 
  </div>



  )
}


<section>
  <div classNam="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
    <div classNam="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
      <div classNam="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
        <div classNam="w-full px-6 py-3">
          <div>
            <div classNam="mt-3 text-left sm:mt-5">
              <div classNam="inline-flex items-center w-full">
                <h3 classNam="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Sign up</h3>
              </div>
              <div classNam="mt-4 text-base text-gray-500">
                <p>Sign up and get our newest news.</p>
              </div>
            </div>
          </div>

          <div classNam="mt-6 space-y-2">
            <div>
              <label for="email" classNam="sr-only">Email</label>
              <input type="text" name="email" id="email" classNam="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your email"/>
            </div>
            <div>
              <label for="password" classNam="sr-only">Password</label>
              <input type="text" name="password" id="password" classNam="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" placeholder="Enter your password"/>
            </div>
            <div classNam="flex flex-col mt-4 lg:space-y-2">
              <button type="button" classNam="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign up</button>
              <a href="#" type="button" classNam="inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm"> Forgot your Password? </a>
            </div>
          </div>
        </div>
        <div classNam="order-first hidden w-full lg:block">
          <img classNam="object-cover h-full bg-cover rounded-l-lg" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt=""/>
        </div>
      </div>
    </div>
  </div>
</section>



<div>
    <div  id="login" className="form-login ">
        
        <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className='mt-10 sm:w-full sm:max-w-sm'>
        <div className=''>
    <center><img  className=' rounded-full mx-auto h-23 w-auto space-y-6 ' src={Logo} alt=""  /></center>

    </div>
    <form  className="space-y-6" >
       
        <div>
            <label htmlFor="txtusu"className='block text-sm font-medium leading-6 text-gray-900'><strong>Username</strong></label>
            <div className='mt-2'>
                  <input type="text" id="txtusu" style={{textAlign:"center"}} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  onChange={ (e)=>setUsu(e.target.value) }  required/>

            </div>
        </div>




        <div>
            <div className='flex items-center justify-between'>
                <label htmlFor="txtpas" className='block text-sm font-medium leading-6 text-gray-900'><strong>Password</strong>
                </label>
            </div>
                <div className='mt-2'>
                     <input type="password" id="txtpas" style={{textAlign:"center"}} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  onChange={ (e)=>setPas(e.target.value) }  required/>
                 </div>
        </div>
       
       
       <div>
        <input type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" value="Login" onClick={ iniciarSesion }/>
            </div>
    </form>

   
    </div>

    </div>
    
   
</div>


{ miLogin === "true" && <Sailbar usu={usu}/> }
</div>




import React from 'react';
import { Button, message, Space } from 'antd';
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  
  
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};
export default App;



