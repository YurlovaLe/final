import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import { getPersonalProducts } from "../../api";
import { selectAuth } from "../../slices/authSlice";

import { publicationDate } from "../../helpers/publicationDate";
import * as S from "./ProfilePage.styles";

export const ProfilePage = () => {
  const { accessToken } = useSelector(selectAuth);
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getPersonalProducts(accessToken).then((data) => {
      setProductsList(data);
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <Menu />
              <S.MainH2>Здравствуйте, Антон!</S.MainH2>
              <S.MainProfile>
                <S.ProfileContent>
                  <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                  <S.ProfileSettings>
                    <S.SettingsLeft>
                      <S.SettingsImg>
                        <a href="#/" target="_self">
                          <S.SettingsImageImg src="#" alt="" />
                        </a>
                      </S.SettingsImg>
                      <S.SettingsChangePhoto href="#/" target="_self">
                        Заменить
                      </S.SettingsChangePhoto>
                    </S.SettingsLeft>

                    <S.SettingsRight>
                      <S.SettingsForm action="#">
                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="fname">
                            Имя
                          </S.SettingsFormLabel>
                          <S.SettingsFirstName
                            id="settings-fname"
                            name="fname"
                            type="text"
                            defaultValue="Ан"
                            placeholder=""
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="lname">
                            Фамилия
                          </S.SettingsFormLabel>
                          <S.SettingsLastNameInput
                            id="settings-lname"
                            name="lname"
                            type="text"
                            defaultValue="Городецкий"
                            placeholder=""
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="city">
                            Город
                          </S.SettingsFormLabel>
                          <S.SettingsCityInput
                            id="settings-city"
                            name="city"
                            type="text"
                            defaultValue="Санкт-Петербург"
                            placeholder=""
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="phone">
                            Телефон
                          </S.SettingsFormLabel>
                          <S.SettingsPhoneInput
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            defaultValue="89161234567"
                            placeholder="+79161234567"
                          />
                        </S.SettingsDiv>

                        <button
                          className="settings__btn btn-hov02"
                          id="settings-btn"
                        >
                          Сохранить
                        </button>
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
            {/* {(productsList.length === 0) ? (
              <div>У вас еще нет товаров</div>
            ) : (
              <S.MainContent>
                <S.Cards>
                  {productsList.map((product) => (
                    <ProductCard
                      key={product.id}
                      img={product.images[0]?.url}
                      title={product.title}
                      price={product.price}
                      city={product.user.city}
                      date={publicationDate(product.created_on)}
                      onClick={() => navigate(`/product`)}
                    />
                  ))}
                </S.Cards>
              </S.MainContent>
            )} */}
          </S.MainContainer>
        </main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
