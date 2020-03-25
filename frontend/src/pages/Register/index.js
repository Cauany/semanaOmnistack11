import React from 'react'

import './style.css'

import { Link } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logoImg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1> Cadastro </h1>
                    <p> Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                    <Link className="back-link" to="/register">
                    <FiArrowLeft size={16} color="#E02041" />
                    Não tenho cadastro
                </Link>
                </section>

                <form action="">

                </form>
            </div>
        </div>
    )
}