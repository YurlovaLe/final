import { NavLink, useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
//import { products } from "../../helpers/products"
import { getProducts } from "../../api";
import * as S from "./MainPage.styles";
import { useEffect, useState } from "react";

export const MainPage = () => {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProductsList(data);
      
    })
  }, []);
  console.log(productsList);


  const getDate = (publicationDay) => {
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    const oneDayInMillisec = 86400000;

    const now = new Date();
    const todayString = now.toISOString().slice(0, 10);
    const millisecToday = new Date (todayString).getTime();

    const date = new Date(publicationDay);
    const dateString = date.toISOString().slice(0, 10);
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const millisecDate = new Date (dateString).getTime();

    if (todayString === dateString) {
      return (`Сегодня в ${hours}:${minutes}`);
    } else if (millisecToday - millisecDate <= oneDayInMillisec) {
      return (`Вчера в ${hours}:${minutes}`);
    } else {
      return (`${day} ${month} в ${hours}:${minutes}`);
    }
  };


  getDate("2023-12-11T16:41:26.759771");
  
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
                {productsList.map(product => 
                  <ProductCard 
                    key={product.id}
                    img={product.images[0]?.url}
                    title={product.title}
                    price={product.price}
                    city={product.user.city}
                    date={getDate(product.created_on)}
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