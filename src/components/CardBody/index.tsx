import React, { InputHTMLAttributes } from 'react';

import './styles.css';

import logo from '../../assets/images/logo.png'

interface LabelProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const CardBody: React.FC<LabelProps> = (props) => {
    return (
        <div className="card sizeCard">
            <div className="card-body">
                <div className="card-title text-center">
                    {props.label}
                </div>
                <img src={logo} className="rounded mx-auto d-block" width="200"/>
                {props.children}
            </div>
        </div>
    )
}

export default CardBody;