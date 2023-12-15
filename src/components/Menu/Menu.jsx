import { useNavigate } from "react-router-dom";
import * as S from "./Menu.styles"

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <S.MainMenu>
      <S.MenuLogoLink href="/">
        <S.MenuLogoImg src="/img/logo.png" alt="logo"/>
      </S.MenuLogoLink>
      <S.MenuForm action="#">
        <button className="menu__btn btn-hov02" id="btnGoBack" onClick={() => navigate(`/`)}>Вернуться на&nbsp;главную</button>
      </S.MenuForm>
    </S.MainMenu>
  )
}