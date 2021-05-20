import './styles.css';

import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import CardBody from '../../components/CardBody';
import api from "../../services/api";

function RegisterPassword() {
    const history = useHistory();
    const location = useLocation();

    const [id, setId] = useState()
    const [lastPasswordExists, setLastPasswordExists] = useState(true)
    const [validatePassword, setValidadePassword] = useState(false)

    useEffect(() => {
        const state = location.state as any
        
        if(state){
            setId(state.idUser)
            setLastPasswordExists(state.lastPasswordExists)

            if(!lastPasswordExists){
                const actualPassword = document.getElementById('actualPassword') as HTMLInputElement;
                actualPassword.classList.add("d-none");
            } else {
                const actualPassword = document.getElementById('actualPassword') as HTMLInputElement;
                actualPassword.classList.remove("d-none");
            }
        } else {
            alert('Impossível de acessar pagina')
            history.push("/");
        }
    }, [location.state])

    function validatedPassword() {
        const mediumRegex = "^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@#$%^&+=]*$";
        const strongRegex = "^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$";
        let correctPassword = false;

        const passwordLevel = document.getElementById('passwordLevel') as HTMLInputElement;
        const progressBar = document.getElementById('progress-bar') as HTMLInputElement;
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        const password = passwordInput.value;
        const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;
        const confirmPassword = confirmPasswordInput.value;

        if(!new RegExp(mediumRegex).test(password)) {
            passwordLevel.innerHTML = 'Senha fraca';
            passwordLevel.style.setProperty("color", "var(--color-progress-weak)", "important");
            progressBar.style.setProperty("width", "35%");
            progressBar.style.setProperty("background-color", "var(--color-progress-weak)", "important");
            correctPassword = false;
        } else {
            passwordLevel.innerHTML = 'Senha média';
            passwordLevel.style.setProperty("color", "var(--color-progress-medium)", "important");
            progressBar.style.setProperty("width", "50%", "important");
            progressBar.style.setProperty("background-color", "var(--color-progress-medium)", "important");
            correctPassword = true;
        }

        if(new RegExp(strongRegex).test(password)) {
            passwordLevel.innerHTML = 'Senha forte';
            passwordLevel.style.setProperty("color", "var(--color-primary-message)", "important");
            progressBar.style.setProperty("width", "100%", "important");
            progressBar.style.setProperty("background-color", "var(--color-primary-message)", "important");
            correctPassword = true;
        }

        if(password !== confirmPassword){
            passwordLevel.innerHTML = passwordLevel.innerHTML + ' | senha difere de confirmar senha';
            passwordLevel.style.setProperty("color", "var(--color-progress-weak)", "important");
            progressBar.style.setProperty("width", "20%", "important");
            progressBar.style.setProperty("background-color", "var(--color-progress-weak)", "important");
            correctPassword = false;
        }

        setValidadePassword(correctPassword)
    }

    async function confirmRegister(e: any) {  
        e.preventDefault();
        const lastPasswordInput = document.getElementById('lastPassword') as HTMLInputElement;
        const lastPassword = lastPasswordInput.value === "" && !lastPasswordExists ? null : lastPasswordInput.value;
        const passwordInput = document.getElementById('password') as HTMLInputElement;
        const password = passwordInput.value;
        if (password !== "" && lastPassword !== "" && validatePassword) {
          await api.post('/registerPassword', {
            id,
            lastPassword,
            password
          }).then((response) => {
            const data = response.data;
            if(data) {
                alert('Senha cadastrada com sucesso!')
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

    return (
        <CardBody label="Controle de acesso - SI">
            <form onSubmit={confirmRegister}>
                <div className="content">
                    <div className="mb-3" id="actualPassword">
                        <label className="form-label">Senha atual:</label>
                        <input type="password" className="form-control" id="lastPassword" placeholder="Confirmar senha"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Digite sua senha:</label>
                        <input type="password" className="form-control mb-2" id="password" placeholder="Senha" onKeyUp={validatedPassword}></input>
                        <div className="progress align-left mt-1">
                            <div className="progress-bar" id="progress-bar" role="progressbar"></div>
                        </div>
                        <div id="passwordLevel" className="form-text text-level-password">
                            Senha fraca
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirme sua senha:</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirmar senha" onKeyUp={validatedPassword}></input>
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