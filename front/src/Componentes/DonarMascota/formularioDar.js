import React from "react";
import stl from "../DonarMascota/formularioDar.module.css";

class FormDarEnAdopcion extends React.Component {
    constructor(props) {
      super(props);
      this.state = [""];
      this.state2 = [""];
      this.state3 = [""];
      this.state4 = [""];
      this.state5 = [""];
      this.state6 = [""];
      this.state7 = [""];
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert("Has inscripto tu mascota exitosamente");
      event.preventDefault();
    }
  
    render() {
      return (
        <div className={stl.formulario}>    
        <form className={stl.formForm} onSubmit={this.handleSubmit}>

        <div className={stl.datosForm}>
          <div>
            Nombre:
            <input className={stl.inputAdopcion} type="text" value={this.state.nombre} onChange={this.handleChange} />
          </div>

          <div>
            Edad:
            <input className={stl.inputAdopcion} type="text" value={this.state2.edad} onChange={this.handleChange} />
          </div>

          <div className={stl.descriptionTitulo}>
          Descripcion:
          <textarea value={this.state3.descripcion} onChange={this.handleChange} />
        </div>

        <div className={stl.secciones}>
          Gato / Perro
          <select  className={stl.opcionesForm} value={this.state4.especie} onChange={this.handleChange}>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
        </div>

        <div className={stl.secciones}>
          Tamaño:
          <select  className={stl.opcionesForm} value={this.state5.tamaño} onChange={this.handleChange}>
            <option value="Chico">Chico</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
          </select>
        </div>

        <div className={stl.secciones}>
         Salud:
          <select  className={stl.opcionesForm} value={this.state6.salud} onChange={this.handleChange}>
            <option value="vacunado">Vacunado</option>
            <option value="desparacitado">Desparacitado</option>
            <option value="castrado">Castrado</option>
          </select>
        </div>

        <div className={stl.secciones}>
          Sociabilidad:
          <select className={stl.opcionesForm}  value={this.state7.sociabilidad} onChange={this.handleChange}>
            <option value="Timido">Timido</option>
            <option value="Independiente">Independiente</option>
            <option value="Agresivo">Agresivo</option>
            <option value="Alegre">Alegre</option>
            <option value="Compañero">Compañero</option>
            <option value="Inteligente">Inteligente</option>
            <option value="Leal">Leal</option>
            <option value="Tranquilo">Tranquilo</option>
            <option value="Guardian">Guardian</option>
            <option value="Vigilante">Vigilante</option>
            <option value="Amigable">Amigable</option>
            <option value=" Desconfiado"> Desconfiado</option>
            <option value="Cariñoso">Cariñoso</option>
            <option value="Testarudo">Testarudo</option>
            <option value="Activo"> Activo</option>
            <option value="Jugueton">Jugueton</option>
            <option value="Agil">Agil</option>
            <option value="Rapido">Rapido</option>
            <option value="Amable"> Amable</option>
          </select>
        </div>

        <div>Imagen
        <input type="file" />
        </div>

          <button className={stl.buttons} type="submit" value="Submit">Submit</button>
          
          </div>
        </form>
        </div>
      );
    }
  }

  export default FormDarEnAdopcion;