import './styles.css';

import CardBody from '../../components/CardBody'
import bruno from '../../assets/images/members/bruno.png'
import luiz from '../../assets/images/members/luiz.png'
import nohan from '../../assets/images/members/nohan.jpg'
import rosemeire from '../../assets/images/advisor/resemeire.jpg'

function Index() {

    return (
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
    )
}

export default Index;