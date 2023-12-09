import * as S from "./Reviews.styles"
import { Review } from "../Review/Review"

export const Reviews = () => {
  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
            <S.ModalBtnClose>
              <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>
            <S.ModalScroll>
              <S.ModalFormNewArt id="formNewArt" action="#">
                <S.FormNewArtBlock>
                  <S.FormNewArtLabel for="text">Добавить отзыв</S.FormNewArtLabel>
                  <S.FormNewArtArea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></S.FormNewArtArea>
                </S.FormNewArtBlock>
                <button class="form-newArt__btn-pub btn-hov02" id="btnPublish">Опубликовать</button>
              </S.ModalFormNewArt>
              <S.ModalReviews>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
              </S.ModalReviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  )
}