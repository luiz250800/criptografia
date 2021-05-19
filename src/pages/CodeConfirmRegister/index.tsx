import './styles.css';

import { useHistory } from 'react-router-dom';
import CardBody from '../../components/CardBody'
import api from "../../services/api";

function CodeConfirmRegister() {
    const history = useHistory();
    
    async function confirmRegister(e: any) {  
        e.preventDefault();
    
        const codeNumberInput = document.getElementById('codeNumber') as HTMLInputElement;
        const codeNumber = codeNumberInput.value;

        if (codeNumber) {
          await api.post('/confirmRegister', {
            codeNumber
          }).then((response) => {
            const data = response.data;
            if(data) {
              history.push({ pathname: '/registerPassword', search: '', state: {idUser: data.userData.id} });
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
            <form onSubmit={confirmRegister} className="text-center">
            <div className="content">
                <div className="mb-3">
                    <label className="form-label">Digite o código de confirmação</label>
                    <input type="text" className="form-control w-50 mg-auto" id="codeNumber" placeholder="Código"></input>
                </div>
            </div>
            <div>
                <button type="submit" className="btn btn-success button">Confirmar cadastro</button>
            </div>
            </form>
        </CardBody>
    )
}

export default CodeConfirmRegister;