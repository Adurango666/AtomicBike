import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      medicalCondition: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor
    console.log(this.state);
    // Limpia el formulario después de enviar
    this.setState({
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      medicalCondition: ''
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Registro de Pilotos</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Vehículo:
            <input
              type="text"
              name="vehicle"
              value={this.state.vehicle}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Condición Médica:
            <input
              type="text"
              name="medicalCondition"
              value={this.state.medicalCondition}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;

