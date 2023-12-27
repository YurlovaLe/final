import styled from "styled-components";
import { Button } from "../../components/Button/Button";

export const Wrapper = styled.div `
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #F1F1F1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;

  @media screen and (max-width: 620px) {
    width: 100%;
    min-width: 320px;
  }  
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px;

  @media screen and (max-width: 890px) {
    padding: 85px 0px 84px;
  }

  @media screen and (max-width: 620px) {
    padding: 85px 0px 84px;
  }
`

export const MainCenterBlock = styled.div`
  @media screen and (max-width: 890px) {
    margin: 0 auto;
    padding: 0 20px;
  }

  @media screen and (max-width: 620px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`

export const MainH2 = styled.h2 `
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;
  text-align: start;

  &:hover::before {
    border-top: 2px solid #0080C1;
    border-left: 2px solid #0080C1;
  }

  @media screen and (max-width: 620px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 20px;
  }
`

export const MainProfile = styled.div`
  width: 100%;
  padding: 0 0 70px;

  @media screen and (max-width: 620px) {
    width: 100%;
    padding: 0 0 40px;
  }
`

export const MainTitle = styled.div`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  text-align: left;

  @media screen and (max-width: 620px) {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 1;
  }
`

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 620px) {
    width: 100%;
    margin: 0 auto;
  }
`

export const ProfileContent = styled.div` 
  max-width: 834px;

  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
`

export const ProfileTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 70px;
  font-weight: 500;
  color: #000000;
  text-align: start;

  @media screen and (max-width: 620px) {
    font-size: 18px;
    line-height: 1;
  }
`

export const ProfileSettings = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media screen and (max-width: 890px) {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  }
`

export const SettingsLeft = styled.div` 
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-right: 43px;

  @media screen and (max-width: 620px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0;
  }
`

export const SettingsImg = styled.div` 
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;

  @media screen and (max-width: 620px) {
    width: 132px;
    height: 132px;
  }
`

export const SettingsImageImg = styled.img` 
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
     object-fit: cover;
`

export const SettingsChangePhoto = styled.label`
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009EE4;

  &:hover {
    color: #0080C1;
  }
`

export const SettingsPhotoLoader = styled.input`
  display: none;
`

export const SettingsRight = styled.div` 
  width: 630px;

  @media screen and (max-width: 620px) {
    width: 100%;
  }

`

export const SettingsDiv = styled.div` 
  display: inline-block;
  margin: 0 7px 20px;

  @media screen and (max-width: 620px) {
    display: inline-block;
    margin: 0 0px 18px;
  }
`

export const SettingsSubmit = styled(Button)`
  margin: 10px 7px 0;

  @media screen and (max-width: 620px) {
    max-width: 100%;
    margin: 8px 0px 0;
}
`

export const SettingsForm = styled.form` 
  width: 630px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;

  @media screen and (max-width: 620px) {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`
export const SettingsFirstName = styled.input`
background-color: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 6px;
padding: 13px 19px;
width: 300px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const SettingsLastNameInput = styled.input`
background-color: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 6px;
padding: 13px 19px;
width: 300px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const SettingsCityInput = styled.input`
background-color: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 6px;
padding: 13px 19px;
width: 300px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const SettingsPhoneInput = styled.input`
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  width: 614px;

  &::-webkit-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &:-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::-ms-input-placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 620px) {
    border-radius: 30px;
    padding: 9px 17px;
    width: 100%;

    &::-webkit-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::-ms-input-placeholder {
      font-size: 14px;
      line-height: 21px;
    }

    &::placeholder {
      font-size: 14px;
      line-height: 21px;
    }
  }
`
export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (270px)[4];
      grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow-y: auto;
  scrollbar-color: #FFFFFF #2E2E2E;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;
    
  &::-webkit-scrollbar {
    width: 0px;
    background-color: #009EE4;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #0080C1;
    border-radius: 3px;
  }

  @media screen and (max-width: 1158px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px)[3];
        grid-template-columns: repeat(3, 270px);
  }

  @media screen and (max-width: 890px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (270px)[2];
        grid-template-columns: repeat(2, 270px);
  }

  @media screen and (max-width: 620px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (137px)[2];
        grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 596px;
  }
`

export const SettingsFormLabel = styled.label`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #C4C4C4;
  margin-bottom: 4px;
  display: block;
  text-align: start;

  @media screen and (max-width: 620px) {
    font-size: 14px;
    line-height: 21px;
    color: #C4C4C4;
    margin-bottom: 6px;
  }
`



