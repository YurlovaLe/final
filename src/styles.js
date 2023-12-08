import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  color: #000000;
}

div,
button,
a {
  font-family: 'Roboto', sans-serif;
}

.header__btn-lk {
  width: 173px;
  height: 40px;
  margin-left: 10px;
}

.header__btn-putAd {
  width: 232px;
  height: 40px;
}

.header__btn-lk, .header__btn-putAd {
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;
}

.menu__btn {
  width: 241px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #009EE4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
}

.btn-hov01:hover {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid #FFFFFF;
}

.btn-hov02:hover {
  background-color: #0080C1;
}

.header__btn-main-enter {
  width: 224px;
  height: 40px;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 1;
}

.search__btn {
  margin-left: 10px;
  width: 158px;
  height: 50px;
  background-color: #009EE4;
  border: 1px solid #009EE4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}

.settings__btn {
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
  width: 154px;
  height: 50px;
  margin: 10px 7px 0;
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
}

.seller__btn {
  margin-top: 20px;
  background-color: #009EE4;
  border-radius: 6px;
  border: 1px solid #009EE4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
}

.seller__btn span {
  display: block;
  font-size: 14px;
  font-weight: 400;
}

@media screen and (max-width: 620px) {

  .header__btn-lk, .header__btn-putAd {
    display: none;
  }

  .settings__btn {
    font-size: 16px;
    line-height: 1;
    width: 100%;
    height: 46px;
    margin: 8px 0px 0;
  }

}

@media screen and (max-width: 590px) {
  .search__btn {
    display: none;
  }
}

@media screen and (max-width: 580px) {
  .seller__btn {
    width: 100%;
    height: 57px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  .seller__btn span {
    font-size: 12px;
  }
}
`