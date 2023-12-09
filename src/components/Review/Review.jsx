import * as S from "./Review.styles"

export const Review = () => {
  return (
    <S.ReviewsReview>
      <S.ReviewsItem>
        <S.ReviewsLeft>
          <S.ReviewsImage>
            <S.ReviewsImageImg src="/" alt=""/>
          </S.ReviewsImage>
        </S.ReviewsLeft>
        <S.ReviewsRight>
          <S.ReviewsName>Олег<S.ReviewsNameSpan>14 августа</S.ReviewsNameSpan></S.ReviewsName>
          <S.ReviewsTitle>Комментарий</S.ReviewsTitle>
          <S.ReviewsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</S.ReviewsText>
        </S.ReviewsRight>
      </S.ReviewsItem>
    </S.ReviewsReview>
  )
}