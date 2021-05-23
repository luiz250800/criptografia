import './styles.css';

import CardBody from '../../components/CardBody'
import api from "../../services/api";

function ForgotPassword() {
    async function forgotPassword(e: any) {  
        e.preventDefault();
    
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const email = emailInput.value;

        if (email) {
          await api.post('/email', {
            email
          }).then((response) => {
            const data = response.data;
            if(data) {
                alert('E-mail enviado para refazer senha.')
            } else {
                alert('E-mail não encontrado em nosso sistema.')
            }
          }).catch(() => {
          })
        } else {
          alert('Preencha todos os campos')
        }
      }

    return (
        <CardBody label="Controle de acesso - SI">
            <form onSubmit={forgotPassword} className="text-center">
            <div className="content">
                <div className="mb-3">
                    <label className="form-label">Digite seu e-mail:</label>
                    <input type="text" className="form-control mg-auto" id="email" placeholder="E-mail"></input>
                </div>
            </div>
            <div>
                <button type="submit" className="btn btn-success button">Enviar e-mail</button>
            </div>
            </form>
        </CardBody>
    )
}

export default ForgotPassword;