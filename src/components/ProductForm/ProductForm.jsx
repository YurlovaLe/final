import * as S from "./ProductForm.styles";

export const ProductForm = ({text, onFormClose}) => {
  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>{text}</S.ModalTitle>
            <S.ModalBtnClose onClick={onFormClose}>
              <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>
            <S.ModalFormNewArt id="formNewArt" action="#">
              <S.FormNewArtBlock>
                <S.FormNewArtLabel for="name">Название</S.FormNewArtLabel>
                <S.FormNewArtInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                />
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtLabel for="text">Описание</S.FormNewArtLabel>
                <S.FormNewArtArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                ></S.FormNewArtArea>
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtP>
                  Фотографии товара
                  <S.FormNewArtPSpan>не более 5 фотографий</S.FormNewArtPSpan>
                </S.FormNewArtP>
                <S.FormNewArtBarImg>
                  <S.FormNewArtImage>
                    <S.FormNewArtImageImg src="/" alt="" />
                    <S.FormNewArtImgCover></S.FormNewArtImgCover>
                  </S.FormNewArtImage>
                  <S.FormNewArtImage>
                    <S.FormNewArtImageImg src="/" alt="" />
                    <S.FormNewArtImgCover></S.FormNewArtImgCover>
                  </S.FormNewArtImage>
                  <S.FormNewArtImage>
                    <S.FormNewArtImgCover></S.FormNewArtImgCover>
                    <S.FormNewArtImageImg src="/" alt="" />
                  </S.FormNewArtImage>
                  <S.FormNewArtImage>
                    <S.FormNewArtImgCover></S.FormNewArtImgCover>
                    <S.FormNewArtImageImg src="/" alt="" />
                  </S.FormNewArtImage>
                  <S.FormNewArtImage>
                    <S.FormNewArtImgCover></S.FormNewArtImgCover>
                    <S.FormNewArtImageImg src="/" alt="" />
                  </S.FormNewArtImage>
                </S.FormNewArtBarImg>
              </S.FormNewArtBlock>
              <S.BlockPrice>
                <S.FormNewArtLabel for="price">Цена</S.FormNewArtLabel>
                <S.FormNewArtInputPrice
                  type="text"
                  name="price"
                  id="formName"
                />
                <S.FormNewArtInputPriceCover>&#x20BD;</S.FormNewArtInputPriceCover>
              </S.BlockPrice>
              <button class="form-newArt__btn-pub btn-hov02" id="btnPublish">
                Опубликовать
              </button>
            </S.ModalFormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
