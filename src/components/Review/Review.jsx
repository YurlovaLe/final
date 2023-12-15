import * as S from "./Review.styles"

export const Review = ({name, date, text, img}) => {

  return (
    <S.ReviewsReview>
      <S.ReviewsItem>
        <S.ReviewsLeft>
          <S.ReviewsImage>
            <S.ReviewsImageImg src={img ? `http://localhost:8090/${img}` : '/'} alt=""/>
          </S.ReviewsImage>
        </S.ReviewsLeft>
        <S.ReviewsRight>
          <S.ReviewsName>{name}<S.ReviewsNameSpan>{date}</S.ReviewsNameSpan></S.ReviewsName>
          <S.ReviewsTitle>Комментарий</S.ReviewsTitle>
          <S.ReviewsText>{text}</S.ReviewsText>
        </S.ReviewsRight>
      </S.ReviewsItem>
    </S.ReviewsReview>
  )
}