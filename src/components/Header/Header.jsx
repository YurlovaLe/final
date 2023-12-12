import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./Header.styles"

export const Header = () => {

  const navigate = useNavigate();

  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderLogo>
        <NavLink to="/">
          <S.LogoMobLink>
              <S.LogoMobImg src="/img/logo-mob.png" alt="logo"/>
          </S.LogoMobLink>
        </NavLink>
        </S.HeaderLogo>
        <button class="header__btn-putAd btn-hov01" id="btputAd" onClick={() => navigate(`/new-product`)}>Разместить объявление</button>
        <button class="header__btn-lk btn-hov01" id="btnlk" onClick={() => navigate(`/profile`)}>Личный кабинет</button>
      </S.HeaderNav>
    </S.Header>
  )
}