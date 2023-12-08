import * as S from "./Header.styles"

export const Header = () => {
  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderLogo>
          <S.LogoMobLink href="#/" target="_blank">
              <S.LogoMobImg src="img/logo-mob.png" alt="logo"/>
          </S.LogoMobLink>
        </S.HeaderLogo>
        <button class="header__btn-putAd btn-hov01" id="btputAd">Разместить объявление</button>
        <button class="header__btn-lk btn-hov01" id="btnlk">Личный кабинет</button>
      </S.HeaderNav>
    </S.Header>
  )
}