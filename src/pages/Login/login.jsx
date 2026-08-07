import './login.css';

import logo from "../../assets/images/logo.png";

import { 
    User,
    TruckElectric,
    ShieldCheck,
    LockKeyhole,
    LogIn,
    ChartNoAxesCombined,
    Eye,
    EyeClosed } from 'lucide-react';

function Login() {
  return (
    <section className="container">
        <section className="left-painel">
            <img src={logo} alt="Logo" id="logotipo" />
            <div className="texts">
                <h1 className='text-left'>
                    Gestão inteligente 
                    <br/>para sua
                    <span> operação</span>
                    <br/>crescer.
                </h1>

                <div id='linha'></div>

                <h2 id='text-left-2'>
                    Controle orçamentos, pedidos, entregas
                    <br/>e muito mais em um só lugar.
                </h2>
            </div>

            <div className="features">
                <div className="feature">
                    <ChartNoAxesCombined className='feature-icon'/>
                    <span>Mais controle</span>
                </div>

                <div className="separator"></div>

                <div className="feature">
                    <TruckElectric className='feature-icon'/>
                    <span>Entregas organizadas</span>
                </div>

                <div className="separator"></div>

                <div className="feature">
                    <ShieldCheck className='feature-icon'/>
                    <span>Informações seguras</span>
                </div>
            </div>
        </section>

        <section className="right-painel">
            <div className="login-form">
                <ShieldCheck className="login-icon"/>
                <h1 id='bem-vindo'>Bem-vindo de volta!</h1>
                <h2 id='faca-login'>Faça login para acessar o sistema.</h2>
                <form>

                    {/*User and password input fields*/}
                    <div className="form-group">   
                        <label htmlFor='usuario'>Usuário</label>
                        <div className="input-box">
                            <User className='input-icon'/>
                            <input 
                                autoComplete="username"
                                type="text" 
                                id='usuario' 
                                name='usuario'
                                placeholder='Digite seu usuário' 
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor='password'>Senha</label>
                        <div className="input-box">
                            <LockKeyhole className='input-icon'/>
                            <input 
                                autoComplete="off"
                                type="password" 
                                id='password'
                                name='password' 
                                placeholder='Digite sua senha' 
                            />
                            <Eye className='input-icon' id='eye-icon'/>
                        </div>
                    </div>

                    <button className="login-button" type="submit">
                        <LogIn className='button-icon'/>
                        Entrar no sistema
                    </button>
                </form>

                <div className="access">
                    <LockKeyhole className='access-icon'/>
                    <h3 id='access-message'>Acesso restrito a funcionários autorizados.</h3>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Login;