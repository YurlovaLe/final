import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
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
        <S.HeaderButtons>
          <Button $view="outline" $size="compact" onClick={() => isAllowed ? navigate(`/new-product`) : navigate('/signin')}>Разместить объявление</Button>
          <Button $view="outline" $size="compact" onClick={() => isAllowed ? navigate(`/profile`) : navigate('/signin')}>Личный кабинет</Button>
        </S.HeaderButtons>
      </S.HeaderNav>
    </S.Header>
  )
}