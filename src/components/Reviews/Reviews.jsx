import { useState } from "react";
import { publicationDate } from "../../helpers/publicationDate";
import { Review } from "../Review/Review";
import { usePostCommentMutation } from "../../api/commentsApi";

import * as S from "./Reviews.styles";

export const Reviews = ({ onFormClose, reviews, isAllowed, productId }) => {
  const [comment, setComment] = useState("");
  const [postComment] = usePostCommentMutation();

  const handlePostComment = async (event) => {
    event.preventDefault();

    await postComment({
      text: comment,
      productId: productId,
    }).unwrap();
    setComment("");
  };
  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalBack onClick={onFormClose}/>
              <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
            </S.ModalHeader>
            <S.ModalBtnClose onClick={onFormClose} type="button">
                <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>
            <S.ModalScroll>
              {isAllowed && (
                <S.ModalFormNewArt id="formNewArt" onSubmit={handlePostComment}>
                  <S.FormNewArtBlock>
                    <S.FormNewArtLabel htmlFor="text">
                      Добавить отзыв
                    </S.FormNewArtLabel>
                    <S.FormNewArtArea
                      name="text"
                      id="formArea"
                      cols="auto"
                      rows="5"
                      placeholder="Введите описание"
                      onChange={(event) => setComment(event.target.value)}
                      value={comment}
                    />
                  </S.FormNewArtBlock>
                  <S.SubmitButton>Опубликовать</S.SubmitButton>
                </S.ModalFormNewArt>
              )}
              <S.ModalReviews>
                {reviews.length !== 0
                  ? reviews.map((review) => (
                      <Review
                        key={review.id}
                        name={review.author.name}
                        date={publicationDate(review.created_on).slice(
                          0,
                          publicationDate(review.created_on).length - 8
                        )}
                        text={review.text}
                        img={review.author.avatar}
                      />
                    ))
                  : "Здесь пока нет отзывов"}
              </S.ModalReviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
