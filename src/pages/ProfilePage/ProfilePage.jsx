import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import { useGetPersonalProductsQuery } from "../../productsApi"
import { selectAuth } from "../../slices/authSlice";
import { useGetUserQuery, useUpdateUserMutation} from "../../userApi"

import { publicationDate } from "../../helpers/publicationDate";
import * as S from "./ProfilePage.styles";

export const ProfilePage = ({isAllowed}) => {
  const { accessToken } = useSelector(selectAuth);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({});

  const {data: productsList=[], isSuccess} = useGetPersonalProductsQuery();
  const [updateUser, {isError}] = useUpdateUserMutation();
  
  const {data: user=[]} = useGetUserQuery();

  const handleUpdateUserInfo = async () => {
    await updateUser({
      name: formValues.fieldName, 
      surname: formValues.fieldSurname, 
      city: formValues.fieldCity,
      phone: formValues.fieldPhone,
    }).unwrap()
  }

  

  return (
    <S.Wrapper>
      <S.Container>
        <Header isAllowed={isAllowed}/>
        <main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <Menu />
              <S.MainH2>{user.name ? `Здравствуйте, ${user.name}!` : 'Здравствуйте!'}</S.MainH2>
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
                      <S.SettingsChangePhoto htmlFor="avatar" href="#/" target="_self">
                        Заменить
                        <S.SettingsPhotoLoader type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                      </S.SettingsChangePhoto>
                    </S.SettingsLeft>

                    <S.SettingsRight>
                      <S.SettingsForm onSubmit={handleUpdateUserInfo}>
                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="fname">
                            Имя
                          </S.SettingsFormLabel>
                          <S.SettingsFirstName
                            id="settings-fname" 
                            name="fname"
                            type="text"
                            defaultValue={user.name}
                            placeholder="Имя"
                            onChange={(event) => setFormValues({...formValues, fieldName: event.target.value})}
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
                            defaultValue={user.surname}
                            placeholder="Фамилия (необязательно)"
                            onChange={(event) => setFormValues({...formValues, fieldSurname: event.target.value})}
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
                            defaultValue={user.city}
                            placeholder="Город"
                            onChange={(event) => setFormValues({...formValues, fieldCity: event.target.value})}
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
                            defaultValue={user.phone}
                            placeholder="Телефон"
                            onChange={(event) => setFormValues({...formValues, fieldPhone: event.target.value})}
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
            {(productsList.length === 0) ? (
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
                      onClick = {() => navigate(`/product/${product.id}`)}
                    />
                  ))}
                </S.Cards>
              </S.MainContent>
            )}
          </S.MainContainer>
        </main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
