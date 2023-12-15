import styled from "styled-components";

export const ReviewsReview = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: flex-start;;
  -ms-flex-align: flex-start;;
  align-items: flex-start;;
  -webkit-box-pack: flex-start;;
  -ms-flex-pack: flex-start;;
  justify-content: flex-start;;
  margin: 15px 0;
`

export const ReviewsItem = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const ReviewsLeft = styled.div`
  margin-right: 12px;
`

export const ReviewsImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #F0F0F0;
`

export const ReviewsImageImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
`

export const ReviewsRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ReviewsName = styled.p`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`

export const ReviewsNameSpan = styled.span`
  margin-left: 10px;
  color: #5F5F5F;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`

export const ReviewsTitle = styled.h5`
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #000000;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`

export const ReviewsText = styled.p`
  font-size: 16px;
  line-height: 32px;
  color: #000000;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`