import { publicationDate } from "../../helpers/publicationDate"
import { Review } from "../Review/Review"

import * as S from "./Reviews.styles"

export const Reviews = ({onFormClose, reviews}) => {
  return (
    
      <S.Wrapper>
        <S.ContainerBg>
          <S.ModalBlock>
            <S.ModalContent>
              <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
              <S.ModalBtnClose onClick={onFormClose}>
                <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
              </S.ModalBtnClose>
              <S.ModalScroll>
                <S.ModalFormNewArt id="formNewArt" action="#">
                  <S.FormNewArtBlock>
                    <S.FormNewArtLabel htmlFor="text">Добавить отзыв</S.FormNewArtLabel>
                    <S.FormNewArtArea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></S.FormNewArtArea>
                  </S.FormNewArtBlock>
                  <button className="form-newArt__btn-pub btn-hov02" id="btnPublish">Опубликовать</button>
                </S.ModalFormNewArt>
                <S.ModalReviews>
                  {reviews.map((review) => <Review key={review.id} name={review.author.name} date={publicationDate(review.created_on).slice(0, publicationDate(review.created_on).length-8)} text={review.text} img={review.avatar}/>)}
                </S.ModalReviews>
              </S.ModalScroll>
            </S.ModalContent>
          </S.ModalBlock>
        </S.ContainerBg>
      </S.Wrapper>
  )
}