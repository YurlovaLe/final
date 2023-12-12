import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { products } from "../../helpers/products";
import * as S from "./ProfilePage.styles";

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <main class="main">
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
                          <S.SettingsImageImg src="#" alt=""/>
                        </a>
                      </S.SettingsImg>
                      <S.SettingsChangePhoto href="#/" target="_self">
                        Заменить
                      </S.SettingsChangePhoto>
                    </S.SettingsLeft>

                    <S.SettingsRight>
                      <S.SettingsForm action="#">

                        <S.SettingsDiv>
                          <S.SettingsFormLabel for="fname">Имя</S.SettingsFormLabel>
                          <S.SettingsFirstName id="settings-fname" name="fname" type="text" value="Ан" placeholder=""/>
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsFormLabel for="lname">Фамилия</S.SettingsFormLabel>
                          <S.SettingsLastNameInput id="settings-lname" name="lname" type="text" value="Городецкий" placeholder=""/>
                        </S.SettingsDiv>
                    
                        <S.SettingsDiv>
                          <S.SettingsFormLabel for="city">Город</S.SettingsFormLabel>
                          <S.SettingsCityInput id="settings-city" name="city" type="text" value="Санкт-Петербург" placeholder=""/>
                        </S.SettingsDiv>
    
                        <S.SettingsDiv>
                          <S.SettingsFormLabel for="phone">Телефон</S.SettingsFormLabel>
                          <S.SettingsPhoneInput id="settings-phone" name="phone" type="tel" value="89161234567" placeholder="+79161234567"/>
                        </S.SettingsDiv>
                    
                        <button class="settings__btn btn-hov02" id="settings-btn">Сохранить</button>
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>
                    
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
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