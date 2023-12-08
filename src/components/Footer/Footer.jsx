import * as S from "./Footer.styles"

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <a href="/#" target="self">
            <S.FooterImageImg src="/img/icon_01.png" alt="home"/>
          </a>
        </S.FooterImg>
        <S.FooterImg>
          <a href="/#" target="self">
            <S.FooterImageImg src="/img/icon_02.png" alt="home"/>
          </a>
        </S.FooterImg>
        <S.FooterImg>
          <a href="/#" target="self">
            <S.FooterImageImg src="/img/icon_03.png" alt="home"/>
          </a>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  )
}