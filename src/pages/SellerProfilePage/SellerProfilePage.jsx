import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { sellsFromDate, publicationDate } from "../../helpers/publicationDate";
import { useGetProductsQuery } from "../../productsApi";

import * as S from "./SellerProfilePage.styles";

export const SellerProfilePage = ({isAllowed}) => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [phoneButton, setPhoneButton] = useState('');

  const { sellerId } = useParams();
  const navigate = useNavigate();

  const {data: dataProducts=[], isLoading: isProductsLoading} = useGetProductsQuery();
  
  useEffect(() => {
    if (!isProductsLoading){
      setProductsList(dataProducts);
      setIsLoading(false);
    }
  }, [isProductsLoading, dataProducts]);

  const sellerProducts = productsList.filter((product) => product.user.id === +sellerId);

  const seller = sellerProducts.find((item) => item.user.id === +sellerId)?.user;

  if (isLoading) {
    return;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Header isAllowed={isAllowed} />
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
                        <S.SellerImageImg src={`http://localhost:8090/${seller.avatar}`} alt=""/>
                        </a>
                      </S.SellerImg>
                    </S.SellerLeft>

                    <S.SellerRight>
                      <S.SellerTitle>{seller.name}</S.SellerTitle>
                      <S.SellerCity>{seller.city}</S.SellerCity>
                      <S.SellerInformation>{sellsFromDate(seller.sells_from)}</S.SellerInformation>
                      <S.SellerImgMobBlock>
                        <S.SellerImgMob>
                          <a href="/" target="_self">
                            <S.SellerImageMobImg src="#/" alt=""/>
                          </a>
                        </S.SellerImgMob>
                      </S.SellerImgMobBlock>
                    
                      <button className="seller__btn btn-hov02" onClick={() => setPhoneButton('show')}>
                        {phoneButton ? "Телефон" : "Показать телефон"} <span> {phoneButton ? seller.phone : `${seller.phone.slice(0, 5)} XXXXXXX`} </span>
                      </button>
                    </S.SellerRight>
                  </S.ProfileSellSeller>
                </S.ProfileSellContent>
              </div>
              <S.MainTitle>Товары продавца</S.MainTitle>
            </S.MainCenterBlock>
            
            <S.MainContent>
              <S.Cards>                            
                {sellerProducts.map(product =>
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