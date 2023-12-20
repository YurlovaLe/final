import { NavLink, useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { publicationDate } from "../../helpers/publicationDate"
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../productsApi";

import * as S from "./MainPage.styles";

export const MainPage = ({isAllowed}) => {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const {data: dataProducts=[], isLoading: isProductsLoading} = useGetProductsQuery();

  useEffect(() => {
    if (!isProductsLoading) {
      setProductsList(dataProducts);
      setIsLoading(false);
    }
  }, [isProductsLoading, dataProducts])

  const filtredProductsList = productsList.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchValue.toLowerCase())
      || product.description?.toLowerCase().includes(searchValue.toLowerCase())
      || product.user.city?.toLowerCase().includes(searchValue.toLowerCase())
    );
  })

  if (isLoading) {
    return;
  }
  
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.HeaderNav>                    
            <NavLink to={isAllowed ? '/profile' : '/signin'}>
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
            <S.SearchForm onSubmit={(event) => {
              event.preventDefault();
              setSearchValue(event.target.search.value);
            }}>
              <S.SearchText type="search" placeholder="Поиск по объявлениям" name="search"/>
              <S.SearchTextMob type="search" placeholder="Поиск" name="search-mob"/>
              <button className="search__btn btn-hov02">Найти</button>
            </S.SearchForm>
          </S.MainSearch>
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              <S.Cards>
                {filtredProductsList.map(product => 
                  <ProductCard 
                    key={product.id}
                    img={product.images[0]?.url}
                    title={product.title}
                    price={product.price}
                    city={product.user.city}
                    date={publicationDate(product.created_on)}
                    onClick = {() => navigate(`/product/${product.id}`)}
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