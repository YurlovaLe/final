import styled from "styled-components"

export const MainMenu = styled.div` 
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;

  @media screen and (max-width: 620px) {
    display: none;
  }
`

export const MenuLogoLink = styled.a`
  width: 54;
  height: 50px;
`

export const MenuLogoImg = styled.img `
  width: 54px;
  height: auto;
`

export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;F
`