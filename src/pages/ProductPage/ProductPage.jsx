import { useNavigate, useParams } from "react-router-dom";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Reviews } from "../../components/Reviews/Reviews";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { Button } from "../../components/Button/Button";
import { publicationDate, sellsFromDate } from "../../helpers/publicationDate";
import { quantityReviews } from "../../helpers/products";
import {
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useUpdateProductImageMutation,
} from "../../api/productsApi";
import { useGetCommentsQuery } from "../../api/commentsApi";
import { selectAuth } from "../../slices/authSlice";

import * as S from "./ProductPage.styles";

export const ProductPage = ({ isAllowed }) => {
  const navigate = useNavigate();

  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const [comments, setComments] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [phoneButton, setPhoneButton] = useState("");
  const [chosenImage, setChosenImage] = useState("");

  const [modalForm, setModalForm] = useState("");

  const { data: dataComments = [], isLoading: isCommentsLoading } =
    useGetCommentsQuery(productId);
  const { data: dataProduct = [], isLoading: isProductLoading } =
    useGetProductQuery(productId);
  const { email } = useSelector(selectAuth);

  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProductImage] = useUpdateProductImageMutation();

  const handleUpdateProduct = async ({ title, description, price, images }) => {
    if (title || description || price) {
      await updateProduct({
        title,
        description,
        price,
        productId,
      }).unwrap();
    }

    if (images[0]) {
      const body = new FormData();
      body.append("file", images[0]);
      await updateProductImage({ productId, images: body }).unwrap();
    }

    setModalForm("");
  };

  const handleDeleteProduct = async () => {
    await deleteProduct(productId).unwrap();
    navigate("/profile");
  };

  useEffect(() => {
    if (!isProductLoading && !isCommentsLoading) {
      const productImage = dataProduct.images[0]?.url;      

      setProduct(dataProduct);
      setComments(dataComments);
      setIsLoading(false);
      productImage && setChosenImage(`http://localhost:8090/${productImage}`);
    }
  }, [isProductLoading, isCommentsLoading, dataProduct, dataComments]);

  const getModalForm = () => {
    switch (modalForm) {
      case "reviews":
        return (
          <Reviews
            onFormClose={() => setModalForm("")}
            productId={productId}
            reviews={comments}
            isAllowed={isAllowed}
          />
        );

      case "edit":
        return (
          <ProductForm
            onFormClose={() => setModalForm("")}
            text={"Редактировать объявление"}
            onFormSubmit={handleUpdateProduct}
            previousTitle={product.title}
            previousDescription={product.description}
            previousPrice={product.price}
            previousImages={product.images}
          />
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return;
  }

  const chooseImage = (index) => {
    return (product.images[index] ? `http://localhost:8090/${product.images[index].url}` : chosenImage)
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Header isAllowed={isAllowed} />
        <S.Main>
          <S.MainContainer>
            <Menu />
          </S.MainContainer>
          <div>
            <S.ArticContent>
              <S.ArticleLeft>
                <S.ModalBack onClick={() => navigate(-1)}/>
                <S.ArticleFillImg>
                  <S.ArticleImg>
                    <S.ArticleImageImg src={chosenImage} alt="" />
                  </S.ArticleImg>
                  <S.ArticleImgBar>
                    {product.images.map((image) => (
                      <S.ArticleImgBarDiv key={image.id}>
                        <S.ArticleImageBarDivImg
                          src={`http://localhost:8090/${image.url}`}
                          onClick={() =>
                            setChosenImage(`http://localhost:8090/${image.url}`)
                          }
                          alt=""
                        />
                      </S.ArticleImgBarDiv>
                    ))}
                  </S.ArticleImgBar>
                  <S.ArticleImgBarMob>
                    <S.ImgBarMobCircleActive onClick={() => setChosenImage(chooseImage(0))}></S.ImgBarMobCircleActive>
                    <S.ImgBarMobCircle onClick={() => setChosenImage(chooseImage(1))}></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle onClick={() => setChosenImage(chooseImage(2))}></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle onClick={() => setChosenImage(chooseImage(3))}></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle onClick={() => setChosenImage(chooseImage(4))}></S.ImgBarMobCircle>
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>{product.title}</S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>
                      {publicationDate(product.created_on)}
                    </S.ArticleDate>
                    <S.ArticleCity>{product.user.city}</S.ArticleCity>
                    <S.ArticleLink
                      rel=""
                      onClick={() => setModalForm("reviews")}
                    >
                      {quantityReviews(comments.length)}
                    </S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>{product.price} ₽</S.ArticlePrice>
                  {email === product.user.email ? (
                    <S.ArticleBtnBlock>
                      <Button onClick={() => setModalForm("edit")}>Редактировать</Button>
                      <Button onClick={() => handleDeleteProduct()}>Снять с публикации</Button>
                    </S.ArticleBtnBlock>
                  ) : (
                    <S.PhoneButton onClick={() => setPhoneButton("show")}>
                      {phoneButton ? "Телефон" : "Показать телефон"}{" "}
                      <div>
                        {" "}
                        {phoneButton
                          ? product.user.phone
                          : `${product.user.phone.slice(0, 5)} XXXXXXX`}{" "}
                      </div>
                    </S.PhoneButton>
                  )}
                  <S.ArticleAuthor>
                    <S.AuthorImage>
                      <S.AuthorImageImg
                        src={`http://localhost:8090/${product.user.avatar}`}
                        alt=""
                      />
                    </S.AuthorImage>
                    <S.AuthorCont>
                      <S.AuthorName
                        onClick={() =>
                          navigate(`/seller-profile/${product.user.id}`)
                        }
                      >
                        {product.user.name}
                      </S.AuthorName>
                      <S.AuthorAbout>
                        {sellsFromDate(product.user.sells_from)}
                      </S.AuthorAbout>
                    </S.AuthorCont>
                  </S.ArticleAuthor>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticContent>
          </div>
          <S.MainContainer>
            <S.MainTitle>Описание товара</S.MainTitle>
            <S.MainContent>
              <S.MainText>{product.description}</S.MainText>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
      {createPortal(
        <Modal isOpen={modalForm}>{getModalForm()}</Modal>,
        document.body
      )}
    </S.Wrapper>
  );
};
