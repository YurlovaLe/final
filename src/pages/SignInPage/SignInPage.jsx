import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {handleLoginApi} from "../../api"

import * as S from "./SignInPage.styles";

export const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Укажите почту/пароль');
      return;
    }
    
    setIsSubmiting(true);

    handleLoginApi({ email, password })
      .then((user) => {
        setIsSubmiting(false);
        console.log(user);
        navigate('/profile')
      })
      .catch((error) => {
        setIsSubmiting(false);
        setError(error.message);
      });
  };

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin id="formLogUp" onSubmit={handleLogin}>
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo"/>
            </S.ModalLogo>
            <S.ModalFormInner>
              <S.ModalInputGroup>
                <S.ModalInput type="text" name="login" id="loginReg" placeholder="email" onChange={(event) => setEmail(event.target.value)}/>
                <S.ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" onChange={(event) => setPassword(event.target.value)}/>
              </S.ModalInputGroup>

              <S.ModalBtnGroup>
                <S.ModalBtnEnter id="SignInEnter">
                  <S.ModalBtnEnterA disabled={isSubmiting}>Войти</S.ModalBtnEnterA>
                </S.ModalBtnEnter>

                <S.ModalBtnSignup id="SignUpEnter">
                  <NavLink to="/signup">
                    <S.ModalBtnSignupA type="button">Зарегистрироваться</S.ModalBtnSignupA>
                  </NavLink>
                </S.ModalBtnSignup>
              </S.ModalBtnGroup>
            </S.ModalFormInner>

          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}