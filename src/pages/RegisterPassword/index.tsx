import './styles.css';

import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import CardBody from '../../components/CardBody';
import api from "../../services/api";

function RegisterPassword() {
    const history = useHistory();
    const location = useLocation();

    const [id, setId] = useState("")

    async function confirmRegister(e: any) {  
        e.preventDefault();

        const lastPasswordInput = document.getElementById('lastPassword') as HTMLInputElement;
        const lastPassword = lastPasswordInput.value;
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        const password = passwordInput.value;

        if (password) {
          await api.post('/registerPassword', {
            id,
            lastPassword,
            password
          }).then((response) => {
            const data = response.data;
            if(data) {
                history.push("/");
            } else {
                alert('Código inválido.')
            }
          }).catch(({response}) => {
            alert(response.data.error);
          })
        } else {
          alert('Preencha todos os campos')
        }
      }

    useEffect(() => {
        const state = location.state as any
        setId(state.idUser)
    }, [location.state])

    return (
        <CardBody label="Controle de acesso - SI">
            <form onSubmit={confirmRegister}>
                <div className="content">
                    <div className="mb-3">
                        <label className="form-label">Senha atual:</label>
                        <input type="password" className="form-control" id="lastPassword" placeholder="Confirmar senha"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Digite sua senha:</label>
                        <input type="password" className="form-control mb-2" id="password" placeholder="Senha"></input>
                        <div className="progress align-left mt-1">
                            <div className="progress-bar" role="progressbar" aria-valuenowName="50" aria-valueminName="0" aria-valuemaxName="100"></div>
                        </div>
                        <div id="passwordLevel" className="form-text text-level-password">
                            Senha fraca
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirme sua senha:</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmar senha"></input>
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-success button">Cadastrar senha</button>
                </div>
            </form>
        </CardBody>
    )
}

export default RegisterPassword;