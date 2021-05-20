import './styles.css';

import { useHistory } from 'react-router-dom';
import CardBody from '../../components/CardBody'
import api from "../../services/api";

function Login() {
    const history = useHistory();
    
    async function login(e: any) {  
        e.preventDefault();
    
        const nmEmailInput = document.getElementById('nmEmail') as HTMLInputElement;
        const nmPasswordInput = document.getElementById('nmPassword') as HTMLInputElement;
        const email = nmEmailInput.value;
        const password = nmPasswordInput.value;

        if (email && password) {
          await api.post('/sessions', {
            email,
            password
          }).then((response) => {
            const data = response.data;
            if(data) {
              history.push({pathname: '/index', search: '', state: {email: data.findUser.email}});
            } else {
              alert('E-mail ou senha incorretos.')
            }
          }).catch(({response}) => {
            alert(response.data.error);
          })
        } else {
          alert('Preencha todos os campos')
        }
      }

    return (
        <CardBody label="Controle de acesso - SI">
            <form onSubmit={login}>
            <div className="content">
                <div className="mb-3">
                    <label className="form-label">Digite seu e-mail:</label>
                    <input type="email" className="form-control" id="nmEmail" placeholder="E-mail"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Digite sua senha:</label>
                    <input type="password" className="form-control" id="nmPassword" placeholder="Senha"></input>
                    <a href="/register" className="form-text  link-register">Não possui login? Cadastre-se!</a>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-success button">Entrar</button>
            </div>
            </form>
        </CardBody>
    )
}

export default Login;