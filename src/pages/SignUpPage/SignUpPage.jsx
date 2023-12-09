import * as S from "./SignUpPage.styles";

export const SignUpPage = () => {
  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin id="formLogUp" action="#">
            <S.ModalLogo>
              <S.ModalLogoImg src="../img/logo_modal.png" alt="logo"/>
            </S.ModalLogo>
            <S.ModalInput class="modal__input login" type="text" name="login" id="loginReg" placeholder="email"/>
            <S.ModalInput class="modal__input password-first" type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
            <S.ModalInput class="modal__input password-double" type="password" name="password" id="passwordSecond" placeholder="Повторите пароль"/>
            <S.ModalInput class="modal__input first-name" type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)"/>
            <S.ModalInput class="modal__input first-last" type="text" name="first-last" id="first-last" placeholder="Фамилия (необязательно)"/>
            <S.ModalInput class="modal__input city" type="text" name="city" id="city" placeholder="Город (необязательно)"/>
            <S.ModalBtnSignupEnt id="SignUpEnter">
              <S.ModalBtnSignupEntA href="../index.html">Зарегистрироваться</S.ModalBtnSignupEntA>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  )
}