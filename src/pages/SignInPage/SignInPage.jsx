import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLoginUserMutation } from "../../authApi";
import { setUser } from "../../slices/authSlice";

import * as S from "./SignInPage.styles";


const initialState = {
  email: "",
  password: "",
}

export const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);
  const dispatch = useDispatch();

  const [
    loginUser,
    {
      data,
      isSuccess,
      isError,
      error,
    }
   ] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (email && password) {
      await loginUser({ email, password });
    } else {
      setFormError('Укажите почту/пароль');
      console.log(formError);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({
        email: email,
        accessToken: data.access_token,
        refreshToken: data.refresh_token
      }));
      navigate('/profile');
    } else {
    console.log('fail', data);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setFormError(error.data.error);
      console.log(formError);
    }
  }, [isError]);

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