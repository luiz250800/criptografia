import './styles.css';

import CardBody from '../../components/CardBody'

function CodeConfirmRegister() {
    return (
        <CardBody label="Controle de acesso - SI">
            <form className="text-center">
            <div className="content">
                <div className="mb-3">
                    <label className="form-label">Digite o código de confirmação</label>
                    <input type="text" className="form-control w-50 mg-auto" id="codeConfirm" placeholder="Código"></input>
                </div>
            </div>
            <div >
                <button type="submit" className="btn btn-success button">Confirmar cadastro</button>
            </div>
            </form>
        </CardBody>
    )
}

export default CodeConfirmRegister;