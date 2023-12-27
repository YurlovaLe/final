import styled from "styled-components";
import { Button } from "../../components/Button/Button";

export const Wrapper = styled.div`
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

  @media screen and (max-width: 580px) {
    width: 100%;
    min-width: 320px;
  }
`

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;

  @media screen and (max-width: 580px){
    padding: 85px 0px 84px;
  }
`

export const MainCenterBlock = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 580px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  text-align: left;

  @media screen and (max-width: 580px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    position: relative;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media screen and (max-width: 580px) {
    margin-bottom: 20px;
  }
`

export const ModalBack = styled.div`
  display: none;
  width: 12px;
  height: 12px;
  border-top: 2px solid #000000;
  border-left: 2px solid #000000;
  transform: rotate(-45deg);
  cursor: pointer;

  &:hover {
    border-top: 2px solid #0080C1;
    border-left: 2px solid #0080C1;
  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`

export const MainProfileSell = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 580px) {
    width: 100%;
    padding: 0 0 40px;
  }
`

export const MainTitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 44px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #000000;
  text-align-last: left;

  @media screen and (max-width: 580px) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 580px) {
    width: 100%;
    margin: 0 auto;
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

  @media screen and (max-width: 580px) {
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

export const ProfileSellContent = styled.div`
  width: 100%;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    max-width: 100%;
    width: 100%;
  }
`

export const ProfileSellSeller = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;

  @media screen and (max-width: 890px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 580px) {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`

export const SellerLeft = styled.div`
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
  margin-right: 50px;

  @media screen and (max-width: 580px) {
    display: none;
    margin-right: 0px;
  }
`

export const SellerImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #F0F0F0;

  @media screen and (max-width: 580px) {
    display: none;
  }
`

export const SellerImageImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const SellerRight = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`

export const SellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
  text-align: left;

  @media screen and (max-width: 580px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`

export const SellerInformation = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 10px;
  text-align: left;

  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 6px;
  }
`

export const SellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5F5F5F;
  margin-bottom: 10px;
  text-align: left;

  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 6px;
  }
`

export const SellerImgMobBlock = styled.div`
  display: none;
  @media screen and (max-width: 580px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px 0;
  }
`

export const SellerImgMob = styled.div`
  @media screen and (max-width: 580px) {
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #F0F0F0;
  }
`

export const SellerImageMobImg = styled.img`
  @media screen and (max-width: 580px) {
    width: 100%;
    height: auto;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }
`

export const SellerButton = styled(Button)`
  margin-top: 20px;
  max-width: 214px;

  @media screen and (max-width: 580px) {
    max-width: 100%;
    font-size: 12px;
  }
`
