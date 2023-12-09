import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import * as S from "./ProductPage.styles";

const isAuth = true;
export const ProductPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.Main>
          <S.MainContainer>
            <Menu />                   
          </S.MainContainer>
          <div>
            <S.ArticContent>                           
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImg>                                        
                    <S.ArticleImageImg src="/" alt=""/>                                        
                  </S.ArticleImg>                                    
                  <S.ArticleImgBar>
                    <S.ArticleImgBarDiv>
                      <S.ArticleImageBarDivImg src="/" alt=""/>
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.ArticleImageBarDivImg src="/" alt=""/>
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.ArticleImageBarDivImg src="/" alt=""/>
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.ArticleImageBarDivImg src="/" alt=""/>
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.ArticleImageBarDivImg src="" alt=""/>
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.ArticleImageBarDivImg src="" alt=""/>
                    </S.ArticleImgBarDiv>
                  </S.ArticleImgBar>
                  <S.ArticleImgBarMob>
                    <S.ImgBarMobCircleActive></S.ImgBarMobCircleActive>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>                                
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>Ракетка для большого тенниса Triumph Pro STС Б/У</S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>Сегодня в 10:45</S.ArticleDate>
                    <S.ArticleCity>Санкт-Петербург</S.ArticleCity>
                    <S.ArticleLink href="#/" target="_blank" rel="">23 отзыва</S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>2 200 ₽</S.ArticlePrice>
                  { isAuth ? 
                    (<div class="article__btn-block">
                      <button class="article__btn btn-redact btn-hov02">Редактировать</button>
                      <button class="article__btn btn-remove btn-hov02">Снять с публикации</button>
                    </div>) 
                    : (
                        <button class="article__btn btn-hov02">
                          Показать&nbsp;телефон <span> 8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ </span>
                        </button>
                      )
                  }
                  <S.ArticleAuthor>
                    <S.AuthorImage>
                      <S.AuthorImageImg src="" alt=""/>
                    </S.AuthorImage>
                    <S.AuthorCont>
                      <S.AuthorName>Кирилл</S.AuthorName>
                      <S.AuthorAbout>Продает товары с августа 2021</S.AuthorAbout>
                    </S.AuthorCont>
                  </S.ArticleAuthor>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticContent>
          </div>
          <S.MainContainer>
            <S.MainTitle>Описание товара</S.MainTitle>
            <S.MainContent>
              <S.MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</S.MainText>                          
            </S.MainContent>             
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}