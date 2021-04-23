import './styles.css';

import CardBody from '../../components/CardBody'

function RegisterPassword() {
    return (
        <CardBody label="Controle de acesso - SI">
            <form>
                <div className="content">
                    <div className="mb-3">
                        <label className="form-label">Digite sua senha:</label>
                        <input type="email" className="form-control mb-2" id="nmPassword" placeholder="Senha"></input>
                        <div className="progress align-left mt-1">
                            <div className="progress-bar" role="progressbar" aria-valuenowName="50" aria-valueminName="0" aria-valuemaxName="100"></div>
                        </div>
                        <div id="passwordLevel" className="form-text text-level-password">
                            Senha fraca
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirme sua senha:</label>
                        <input type="email" className="form-control" id="confirmPassword" placeholder="Confirmar senha"></input>
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