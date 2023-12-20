import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./Header.styles"

export const Header = ({isAllowed}) => {

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
        <button className="header__btn-putAd btn-hov01" id="btputAd" onClick={() => isAllowed ? navigate(`/new-product`) : navigate('/signin')}>Разместить объявление</button>
        <button className="header__btn-lk btn-hov01" id="btnlk" onClick={() => isAllowed ? navigate(`/profile`) : navigate('/signin')}>Личный кабинет</button>
      </S.HeaderNav>
    </S.Header>
  )
}