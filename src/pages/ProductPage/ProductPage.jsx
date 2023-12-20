import { useNavigate, useParams } from "react-router-dom";
import { createPortal} from "react-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Reviews } from "../../components/Reviews/Reviews";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { publicationDate, sellsFromDate } from "../../helpers/publicationDate"
import {quantityReviews} from "../../helpers/products"
import {useGetProductQuery, useUpdateProductMutation, useDeleteProductMutation} from "../../productsApi"
import {useGetCommentsQuery} from "../../commentsApi"
import { selectAuth } from "../../slices/authSlice";

import * as S from "./ProductPage.styles";

export const ProductPage = ({isAllowed}) => {
  const navigate = useNavigate();

  const { productId } = useParams();
  const [product, setProduct] = useState('');
  const [comments, setComments] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [phoneButton, setPhoneButton] = useState('');
  const [chosenImage, setChosenImage] = useState('');

  const [modalForm, setModalForm] = useState("");

  const {data: dataComments=[], isLoading: isCommentsLoading} = useGetCommentsQuery(productId);
  const {data: dataProduct=[], isLoading: isProductLoading} = useGetProductQuery(productId);
  const { email } = useSelector(selectAuth);

  const [updateProduct, {isError}] = useUpdateProductMutation();
  const [deleteProduct, {isErrorDelete}] = useDeleteProductMutation();

  const handleUpdateProduct = async ({title, description, price}) => {
    await updateProduct({
      title,
      description,
      price,
      productId,
    }).unwrap();  
    setModalForm('');
  }

  const handleDeleteProduct = async () => {
    await deleteProduct(productId).unwrap();
    navigate('/profile');
  }

  useEffect(() => {
    if (!isProductLoading && !isCommentsLoading) {
      setProduct(dataProduct);
      setComments(dataComments);
      setIsLoading(false);
      setChosenImage(`http://localhost:8090/${dataProduct.images[0].url}`);
    }
  }, [isProductLoading, isCommentsLoading, dataProduct, dataComments])

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
        )
      
      case "edit":
        return (
          <ProductForm
            onFormClose={() => setModalForm("")}
            text = {"Редактировать объявление"}
            onFormSubmit={handleUpdateProduct}
            previousTitle={product.title}
            previousDescription={product.description}
            previousPrice={product.price}
          />
        )
      default:
        return null;
    }

  }

  if (isLoading) {
    return;
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Header isAllowed={isAllowed}/>
        <S.Main>
          <S.MainContainer>
            <Menu />                   
          </S.MainContainer>
          <div>
            <S.ArticContent>                           
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImg>                                        
                    <S.ArticleImageImg src={chosenImage} alt=""/>                                        
                  </S.ArticleImg>                                    
                  <S.ArticleImgBar>
                    {product.images.map((image) =>
                      (
                        <S.ArticleImgBarDiv key={image.id}>
                          <S.ArticleImageBarDivImg src={`http://localhost:8090/${image.url}`} onClick={() => setChosenImage(`http://localhost:8090/${image.url}`)} alt="" />
                        </S.ArticleImgBarDiv>
                      )
                    )}
                  </S.ArticleImgBar>
                  <S.ArticleImgBarMob>
                    <S.ImgBarMobCircleActive></S.ImgBarMobCircleActive>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>                                
              </S.ArticleLeft>
              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>{product.title}</S.ArticleTitle>
                  <S.ArticleInfo>
                    <S.ArticleDate>{publicationDate(product.created_on)}</S.ArticleDate>
                    <S.ArticleCity>{product.user.city}</S.ArticleCity>
                    <S.ArticleLink rel="" onClick={() => setModalForm("reviews")}>{quantityReviews(comments.length)}</S.ArticleLink>
                  </S.ArticleInfo>
                  <S.ArticlePrice>{product.price} ₽</S.ArticlePrice>
                  { (email === product.user.email) ? 
                    (<S.ArticleBtnBlock>
                      <button className="article__btn btn-redact btn-hov02" onClick={() => setModalForm("edit")}>Редактировать</button>
                      <button className="article__btn btn-remove btn-hov02" onClick={() => handleDeleteProduct()}>Снять с публикации</button>
                    </S.ArticleBtnBlock>) 
                    : (
                        <button className="article__btn btn-hov02" onClick={() => setPhoneButton('show')}>
                          {phoneButton ? "Телефон" : "Показать телефон"} <span> {phoneButton ? product.user.phone : `${product.user.phone.slice(0, 5)} XXXXXXX`} </span>
                        </button>
                      )
                  }
                  <S.ArticleAuthor>
                    <S.AuthorImage>
                      <S.AuthorImageImg src={`http://localhost:8090/${product.user.avatar}`} alt=""/>
                    </S.AuthorImage>
                    <S.AuthorCont>
                      <S.AuthorName onClick={() => navigate(`/seller-profile/${product.user.id}`)}>{product.user.name}</S.AuthorName>
                      <S.AuthorAbout>{sellsFromDate(product.user.sells_from)}</S.AuthorAbout>
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
  )
}