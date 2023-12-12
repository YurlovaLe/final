import { NavLink, useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { products } from "../../helpers/products"
import * as S from "./MainPage.styles";

export const MainPage = () => {
  const navigate = useNavigate();
   
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.HeaderNav>                    
            <NavLink to="/signin">
              <button className="header__btn-main-enter btn-hov01" id="btnMainEnter">Вход в личный кабинет</button>
            </NavLink>
          </S.HeaderNav>
        </S.Header>
        <main className="main">
          <S.MainSearch>
            <S.SearchLogoLink href="/">
              <S.SearchLogoImg src="/img/logo.png" alt="logo" />
            </S.SearchLogoLink>
            <S.SearchLogoMobLink href="/">
              <S.SearchLogoMobImg src="/img/logo-mob.png" alt="logo" />
            </S.SearchLogoMobLink>
            <S.SearchForm action="#">
              <S.SearchText type="search" placeholder="Поиск по объявлениям" name="search"/>
              <S.SearchTextMob type="search" placeholder="Поиск" name="search-mob"/>
              <button className="search__btn btn-hov02">Найти</button>
            </S.SearchForm>
          </S.MainSearch>
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.Cards>
                {products.map(product => 
                  <ProductCard 
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    city={product.city}
                    date={product.date}
                    onClick = {() => navigate(`/product`)}
                  />)}
              </S.Cards>                        
            </S.MainContent>
          </S.MainContainer>
        </main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}