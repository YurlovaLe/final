import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { products } from "../../helpers/products";
import * as S from "./SellerProfilePage.styles";

export const SellerProfilePage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <Menu />
              <S.MainH2>Профиль продавца</S.MainH2>
              <div>
                <S.ProfileSellContent>
                  <S.ProfileSellSeller>
                    <S.SellerLeft>
                      <S.SellerImg>
                        <a href="/" target="_self">
                          <S.SellerImageImg src="#/" alt=""/>
                        </a>
                      </S.SellerImg>
                    </S.SellerLeft>

                    <S.SellerRight>
                      <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                      <S.SellerCity>Санкт-Петербург</S.SellerCity>
                      <S.SellerInformation>Продает товары с августа 2021</S.SellerInformation>
                      <S.SellerImgMobBlock>
                        <S.SellerImgMob>
                          <a href="/" target="_self">
                            <S.SellerImageMobImg src="#/" alt=""/>
                          </a>
                        </S.SellerImgMob>
                      </S.SellerImgMobBlock>
                    
                      <button class="seller__btn btn-hov02">Показать&nbsp;телефон
                        <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                      </button>
                    </S.SellerRight>
                  </S.ProfileSellSeller>
                </S.ProfileSellContent>
              </div>
              <S.MainTitle>Товары продавца</S.MainTitle>
            </S.MainCenterBlock>
            
            <S.MainContent>
              <S.Cards>                            
              {products.map(product => <ProductCard img={product.img} title={product.title} price={product.price} city={product.city} date={product.date}/>)}
              </S.Cards>                        
            </S.MainContent>    
          </S.MainContainer>
        </main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}