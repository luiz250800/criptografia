import './styles.css';

import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import CardBody from '../../components/CardBody'
import bruno from '../../assets/images/members/bruno.png'
import luiz from '../../assets/images/members/luiz.png'
import nohan from '../../assets/images/members/nohan.jpg'
import rosemeire from '../../assets/images/advisor/resemeire.jpg'
import api from "../../services/api";

function Index() {
    const history = useHistory();
    const location = useLocation();

    const [email, setEmail] = useState()

    useEffect(() => {
        const state = location.state as any
        
        if(state){
            setEmail(state.email)
        } else {
            alert('Você não está logado');
            history.push("/");
        }
    }, [location.state])

    async function resetPassword(e: any) {  
        e.preventDefault();
        
        await api.post('/email', {
            email: email
        }).then((response) => {
            const data = response.data;
            if(data) {
                alert('Verifique seu e-mail para alterar a senha!')
            }
        }).catch(({response}) => {
            alert(response.data.error);
        })
      }

    return (
        <div>
            <div className="text-center">
                <button type="submit" className="btn btn-success button" onClick={resetPassword}>Alterar senha</button>
            </div>
        <CardBody label="Controle de acesso - SI">
            <div className="text-center mb-3">Integrantes</div>
            <div className="d-flex justify-content-evenly">
            <img className="rounded-circle" src={bruno} width="150"></img>
            <img className="rounded-circle" src={luiz} width="150"></img>
            <img className="rounded-circle" src={nohan} width="150"></img>
            </div>
            <div className="d-flex justify-content-evenly">
            <label className="bruno">Bruno Penna</label>
            <label className="luiz">Luiz Santos</label>
            <label className="nohan">Nohan Moraes</label>
            </div>
            <br />
            <div className="text-center mb-3">Orientadora</div>
            <div className="d-flex justify-content-center">
            <img className="rounded-circle" src={rosemeire} width="150"></img>
            </div>
            <div className="d-flex justify-content-center">
            <label>Rosemeire Cardoso</label>
            </div>
        </CardBody>
        </div>
    )
}

export default Index;