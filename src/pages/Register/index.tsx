import './styles.css';

import CardBody from '../../components/CardBody'
import Message from '../../components/Message'

function Register() {

    return (
        <CardBody label="Controle de acesso - SI">
            <form className="">
            <div className="content">
                <div className="mb-3">
                    <label className="form-label">Digite seu nome:</label>
                    <input type="email" className="form-control" id="nmUser" placeholder="Nome"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Digite seu e-mail:</label>
                    <input type="email" className="form-control" id="nmEmail" placeholder="Senha"></input>
                    <a href="/" className="form-text  link-register">Já possui login? logue-se!</a>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-success button">Entrar</button>
            </div>
            </form>
        </CardBody>
        
    )
}

export default Register;