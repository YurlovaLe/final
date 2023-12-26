import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useRegisterUserMutation, useLoginUserMutation } from "../../authApi";
import { setUser } from "../../slices/authSlice";

import * as S from "./SignUpPage.styles";

export const SignUpPage = () => {
  
const [formValues, setFormValues] = useState({});
//const [error, setError] = useState('');
const [isSubmiting, setIsSubmiting] = useState(false);
const dispatch = useDispatch();

const [
  registerUser,
  {
    isErrorRegister,
    errorRegister,
  }
 ] = useRegisterUserMutation();

 const [
  loginUser,
  {
    isErrorLogin,
    errorLogin,
  }
 ] = useLoginUserMutation();

const navigate = useNavigate();

const handleRegister = async (event) => {
  event.preventDefault();

  if (!formValues.fieldEmail || !formValues.fieldPassword) {
    //setError('Укажите почту/пароль');
    return;
  }

  if (formValues.password!==formValues.repeatPassword) {
    //setError('Пароли не совпадают');
    return;
  }

  await registerUser({ 
    email: formValues.fieldEmail,
    password: formValues.fieldPassword, 
    name: formValues.fieldName, 
    surname: formValues.fieldSurname, 
    city: formValues.fieldCity
  });

  const { data } = await loginUser({ email: formValues.fieldEmail, password: formValues.fieldPassword });

  dispatch(setUser({
    email: formValues.fieldEmail,
    accessToken: data.access_token,
    refreshToken: data.refresh_token
  }));

  navigate('/profile');
};

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin id="formLogUp" onSubmit={handleRegister}>
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo"/>
            </S.ModalLogo>
            <S.ModalInput type="text" name="login" id="loginReg" placeholder="email" onChange={(event) => setFormValues({...formValues, fieldEmail: event.target.value})}/>
            <S.ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" onChange={(event) => setFormValues({...formValues, fieldPassword: event.target.value})}/>
            <S.ModalInput type="password" name="password" id="passwordSecond" placeholder="Повторите пароль" onChange={(event) => setFormValues({...formValues, fieldRepeatPassword: event.target.value})}/>
            <S.ModalInput type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)" onChange={(event) => setFormValues({...formValues, fieldName: event.target.value})}/>
            <S.ModalInput type="text" name="first-last" id="first-last" placeholder="Фамилия (необязательно)" onChange={(event) => setFormValues({...formValues, fieldSurname: event.target.value})}/>
            <S.ModalInput type="text" name="city" id="city" placeholder="Город (необязательно)" onChange={(event) => setFormValues({...formValues, fieldCity: event.target.value})}/>
            <S.ModalBtnSignupEnt id="SignUpEnter">
            <div>{errorRegister}</div>
            <S.ModalBtnSignupEntA disabled={isSubmiting}>Зарегистрироваться</S.ModalBtnSignupEntA>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}