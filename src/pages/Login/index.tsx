import './styles.css';

import CardBody from '../../components/CardBody'

function Login() {
    return (
        <CardBody label="Controle de acesso - SI">
            <form>
            <div className="content">
                <div className="mb-3">
                    <label className="form-label">Digite seu e-mail:</label>
                    <input type="email" className="form-control" id="nmEmail" placeholder="E-mail"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Digite sua senha:</label>
                    <input type="email" className="form-control" id="nmPassword" placeholder="Senha"></input>
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