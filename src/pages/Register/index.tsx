import './styles.css';

import { useHistory } from 'react-router-dom';
import CardBody from '../../components/CardBody'
import Message from '../../components/Message'
import api from "../../services/api";

function Register() {

    const history = useHistory();
    async function registerUser(e: any) {  
        
        e.preventDefault();
    
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const name = nameInput.value;
        const email = emailInput.value;

        if (name && email) {
          await api.post('/users', {
            name,
            email
          }).then((response) => {
            const data = response.data;
            if(data) {
              const form = document.getElementById('form') as HTMLInputElement;
              form.classList.add("d-none");
              const message = document.getElementById('message') as HTMLInputElement;
              message.classList.remove("d-none");
            } else {
              alert('Nome ou e-mail inválido.')
            }
          }).catch((error) => {
            alert('Cadastro inválido!');
          })
        } else {
          alert('Preencha todos os campos')
        }
      }

    return (
        <CardBody label="Controle de acesso - SI">
            <div className="d-none" id="message">
                <Message></Message>
            </div>
            <form onSubmit={registerUser} id="form">
            <div className="content">
                <div className="mb-3">
                    <label className="form-label">Digite seu nome:</label>
                    <input type="name" className="form-control" id="name" placeholder="Nome"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Digite seu e-mail:</label>
                    <input type="email" className="form-control" id="email" placeholder="Senha"></input>
                    <a href="/" className="form-text  link-register">Já possui login? logue-se!</a>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-success button">Cadastrar-se</button>
            </div>
            </form>
        </CardBody>
    )
}

export default Register;