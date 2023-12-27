import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import * as S from "./Menu.styles"

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <S.MainMenu>
      <S.MenuLogoLink href="/">
        <S.MenuLogoImg src="/img/logo.png" alt="logo"/>
      </S.MenuLogoLink>
      <S.MenuForm action="#">
        <Button onClick={() => navigate(`/`)}>Вернуться на&nbsp;главную</Button>
      </S.MenuForm>
    </S.MainMenu>
  )
}