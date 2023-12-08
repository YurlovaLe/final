import * as S from "./Menu.styles"

export const Menu = () => {
  return (
    <S.MainMenu>
      <S.MenuLogoLink href="#/" target="_blank">
        <S.MenuLogoImg src="img/logo.png" alt="logo"/>
      </S.MenuLogoLink>
      <S.MenuForm action="#">
        <button class="menu__btn btn-hov02" id="btnGoBack">Вернуться на&nbsp;главную</button>
      </S.MenuForm>
    </S.MainMenu>
  )
}