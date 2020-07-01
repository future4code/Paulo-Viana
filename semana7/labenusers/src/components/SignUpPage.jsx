import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "pedro-severo-turing"
  }
};

class SignUpPage extends React.Component {
  state = {
    name: "",
    email: ""
  };

  onChangeName = event => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert("Usuário criado com sucesso");
        this.setState({ name: "", email: "" });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nome do Usuário"
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <input
          type="email"
          placeholder="Email do Usuário"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.createUser}>Enviar Cadastro</button>
      </div>
    );
  }
}

export default SignUpPage;
