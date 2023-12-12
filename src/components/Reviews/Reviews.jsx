import * as S from "./Reviews.styles"
import { Review } from "../Review/Review"


const reviews = [
  {
    name: 'Олег',
    date: '14 августа',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Олег',
    date: '14 августа',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Олег',
    date: '14 августа',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    name: 'Олег',
    date: '14 августа',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }

]

export const Reviews = ({onFormClose}) => {
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
                    <S.FormNewArtLabel for="text">Добавить отзыв</S.FormNewArtLabel>
                    <S.FormNewArtArea name="text" id="formArea" cols="auto" rows="5" placeholder="Введите описание"></S.FormNewArtArea>
                  </S.FormNewArtBlock>
                  <button class="form-newArt__btn-pub btn-hov02" id="btnPublish">Опубликовать</button>
                </S.ModalFormNewArt>
                <S.ModalReviews>
                  {reviews.map((review) => <Review name={review.name} date={review.date} text={review.text}/>)}
                </S.ModalReviews>
              </S.ModalScroll>
            </S.ModalContent>
          </S.ModalBlock>
        </S.ContainerBg>
      </S.Wrapper>
  )
}