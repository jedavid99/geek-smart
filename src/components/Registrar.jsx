import React, { useState, useEffect } from 'react'

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const [titulo, setTitulo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [precio, setPrecio] = useState("");


  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { titulo, estilo, tecnica, precio }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] );



  const limpiarFormulario = () => {
    setTitulo("");
    setEstilo("");
    setTecnica("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  }


  return (
    

    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      clientes 
      <br/>
      <form id="miFormulario" onSubmit={ botonGuardar } >
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Digite El Título"  onChange={(e) => setTitulo(e.target.value)}  required  />
          </div>

          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setEstilo(e.target.value)}  required  >
              <option value="">Indique Estilo</option>
              <option value="Retrato">Retrato</option>
              <option value="Paisaje">Paisaje</option>
              <option value="Desnudo">Desnudo</option>
            </select>
          </div>
        </div>
        
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setTecnica(e.target.value)}  required  >
              <option value="">Indique Técnica</option>
              <option value="Óleo">Óleo</option>
              <option value="Acrílico">Acrílico</option>
              <option value="Pastel">Pastel</option>
            </select>
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Digite El Precio"  onChange={(e) => setPrecio(e.target.value)}  required  />
          </div>
        </div>

        <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Guardar Datos</button>
          </div>
        </div>
      </form>
    </div>
            
  </div>




  )
}
