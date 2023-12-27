import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  useRegisterUserMutation,
  useLoginUserMutation,
} from "../../api/authApi";
import { setUser } from "../../slices/authSlice";

import * as S from "./SignUpPage.styles";

export const SignUpPage = () => {
  const [formValues, setFormValues] = useState({});
  const [formError, setFormError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const dispatch = useDispatch();

  const [registerUser] = useRegisterUserMutation();

  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsSubmiting(true);

    if (!formValues.fieldEmail || !formValues.fieldPassword) {
      setFormError("Укажите email и пароль");
      return;
    }

    if (formValues.fieldEmail.length < 3) {
      setFormError("Введенный email слишком короткий");
      return;
    }

    if (formValues.fieldPassword.length < 6) {
      setFormError("Введенный пароль слишком короткий");
      return;
    }

    if (formValues.fieldPassword !== formValues.fieldRepeatPassword) {
      setFormError("Пароли не совпадают");
      return;
    }

    const { error = {} } = await registerUser({
      email: formValues.fieldEmail,
      password: formValues.fieldPassword,
      name: formValues.fieldName,
      surname: formValues.fieldSurname,
      city: formValues.fieldCity,
    });

    if (error.status === 400) {
      setFormError("Такой пользователь уже существует");
    } else if (error.status === "FETCH_ERROR") {
      setFormError("Что-то пошло не так");
    } else {
      const { data } = await loginUser({
        email: formValues.fieldEmail,
        password: formValues.fieldPassword,
      });

      dispatch(
        setUser({
          email: formValues.fieldEmail,
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
        })
      );

      setIsSubmiting(false);

      navigate("/profile");
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin
            id="formLogUp"
            onSubmit={handleRegister}
            onChange={() => setFormError("")}
          >
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
            </S.ModalLogo>
            <S.ModalInput
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
              onChange={(event) =>
                setFormValues({ ...formValues, fieldEmail: event.target.value })
              }
            />
            <S.ModalInput
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  fieldPassword: event.target.value,
                })
              }
            />
            <S.ModalInput
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  fieldRepeatPassword: event.target.value,
                })
              }
            />
            <S.ModalInput
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
              onChange={(event) =>
                setFormValues({ ...formValues, fieldName: event.target.value })
              }
            />
            <S.ModalInput
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  fieldSurname: event.target.value,
                })
              }
            />
            <S.ModalInput
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
              onChange={(event) =>
                setFormValues({ ...formValues, fieldCity: event.target.value })
              }
            />
            <S.ModalBtnSignupEnt id="SignUpEnter">
              <S.ModalBtnSignupEntA disabled={isSubmiting}>
                Зарегистрироваться
              </S.ModalBtnSignupEntA>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
          <S.ErrorForm>{formError}</S.ErrorForm>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  );
};
