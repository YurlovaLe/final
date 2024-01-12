import { useEffect, useState } from "react";
import * as S from "./ProductForm.styles";

export const ProductForm = ({
  text,
  onFormClose,
  onFormSubmit,
  previousTitle = "",
  previousDescription = "",
  previousPrice,
  previousImages,
}) => {
  const [title, setTitle] = useState(previousTitle);
  const [description, setDescription] = useState(previousDescription);
  const [price, setPrice] = useState(previousPrice);
  const [images, setImages] = useState([]);
  const [imageSource, setImageSource] = useState(null);
  const imageUrl =
    previousImages && previousImages[0]
      ? `http://localhost:8090/${previousImages[0].url}`
      : "";

  const submitHandler = (event) => {
    event.preventDefault();
    const data = { title, description, price, images };
    onFormSubmit(data);
  };

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const imageSrc = fileReader.result;
      setImageSource(imageSrc);
    };
    images.length && fileReader.readAsDataURL(images[0]);
  }, [images]);

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalHeader>
              <S.ModalBack onClick={onFormClose} />
              <S.ModalTitle>{text}</S.ModalTitle>
            </S.ModalHeader>
            <S.ModalBtnClose onClick={onFormClose}>
              <S.ModalBtnCloseLine></S.ModalBtnCloseLine>
            </S.ModalBtnClose>
            <S.ModalFormNewArt id="formNewArt" onSubmit={submitHandler}>
              <S.FormNewArtBlock>
                <S.FormNewArtLabel htmlFor="name">Название</S.FormNewArtLabel>
                <S.FormNewArtInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtLabel htmlFor="text">Описание</S.FormNewArtLabel>
                <S.FormNewArtArea
                  name="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></S.FormNewArtArea>
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtP>
                  Фотографии товара
                  <S.FormNewArtPSpan>не более 5 фотографий</S.FormNewArtPSpan>
                </S.FormNewArtP>
                <S.FormNewArtBarImg htmlFor="photo" href="#/" target="_self">
                  <S.SettingsPhotoLoader
                    onChange={(event) => setImages(event.target.files)}
                    id="photo"
                    type="file"
                    name="photo"
                    accept="image/png, image/jpeg"
                  />
                  <S.FormNewArtImage>
                    <S.FormNewArtImageImg
                      src={imageSource || imageUrl}
                      alt=""
                    />
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
                <S.FormNewArtLabel htmlFor="price">Цена</S.FormNewArtLabel>
                <S.FormNewArtInputPrice
                  type="text"
                  name="price"
                  id="formName"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
                <S.FormNewArtInputPriceCover>
                  &#x20BD;
                </S.FormNewArtInputPriceCover>
              </S.BlockPrice>
              <S.SubmitButton>Опубликовать</S.SubmitButton>
            </S.ModalFormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  );
};
