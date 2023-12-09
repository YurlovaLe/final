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
                <S.ModalBtnEnter id="SignUpEnter">
                  <S.ModalBtnEnterA href="../index.html">Зарегистрироваться</S.ModalBtnEnterA>
                </S.ModalBtnEnter>

                <S.ModalBtnSignup id="SignUpEnter">
                  <S.ModalBtnSignupA href="../index.html">Зарегистрироваться</S.ModalBtnSignupA>
                </S.ModalBtnSignup>
              </S.ModalBtnGroup>
            </S.ModalFormInner>

          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}