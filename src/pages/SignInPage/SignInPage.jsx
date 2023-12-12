import { NavLink } from "react-router-dom";

import * as S from "./SignInPage.styles";

export const SignInPage = () => {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin id="formLogUp" action="#">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo"/>
            </S.ModalLogo>
            <S.ModalFormInner>
              <S.ModalInputGroup>
                <S.ModalInput class="modal__input login" type="text" name="login" id="loginReg" placeholder="email"/>
                <S.ModalInput class="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
              </S.ModalInputGroup>

              <S.ModalBtnGroup>
                <S.ModalBtnEnter id="SignInEnter">
                  <NavLink to="/profile">
                    <S.ModalBtnEnterA href="../index.html">Войти</S.ModalBtnEnterA>
                  </NavLink>
                </S.ModalBtnEnter>

                <S.ModalBtnSignup id="SignUpEnter">
                  <NavLink to="/signup">
                    <S.ModalBtnSignupA href="../index.html">Зарегистрироваться</S.ModalBtnSignupA>
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