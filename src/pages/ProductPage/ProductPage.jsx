import { useNavigate, useParams } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Reviews } from "../../components/Reviews/Reviews";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Menu } from "../../components/Menu/Menu";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { publicationDate, sellsFromDate } from "../../helpers/publicationDate"
import {quantityReviews} from "../../helpers/products"
import { getComments, getProduct } from "../../api";

import * as S from "./ProductPage.styles";

const isAuth = false;

export const ProductPage = () => {
  const navigate = useNavigate();

  const { productId } = useParams();
  const [product, setProduct] = useState('');
  const [comments, setComments] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [phoneButton, setPhoneButton] = useState('');

  const [modalForm, setModalForm] = useState("");

  useEffect(() => {
    getProduct(productId).then((data) => {
      setProduct(data);
      setIsLoading(false);
    })
  }, []);
  console.log(product);

  useEffect(() => {
    getComments(productId).then((data) => {
      setComments(data);
    })
  }, []);
  console.log(comments);

  const getModalForm = () => {
    switch (modalForm) {
      case "reviews":
        return (
          <Reviews
            onFormClose={() => setModalForm("")}
            reviews={comments}
          />
        )
      
      case "edit":
        return (
          <ProductForm
            onFormClose={() => setModalForm("")}
            text = {"Редактировать объявление"}
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
        <Header />
        <S.Main>
          <S.MainContainer>
            <Menu />                   
          </S.MainContainer>
          <div>
            <S.ArticContent>                           
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImg>                                        
                    <S.ArticleImageImg src={product.images[0] ? `http://localhost:8090/${product.images[0].url}` : "/"} alt=""/>                                        
                  </S.ArticleImg>                                    
                  <S.ArticleImgBar>
                    {product.images.map((image) =>
                      (
                        <S.ArticleImgBarDiv key={product.id}>
                          <S.ArticleImageBarDivImg src={`http://localhost:8090/${image.url}`} alt=""/>
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
                  { isAuth ? 
                    (<S.ArticleBtnBlock>
                      <button className="article__btn btn-redact btn-hov02" onClick={() => setModalForm("edit")}>Редактировать</button>
                      <button className="article__btn btn-remove btn-hov02">Снять с публикации</button>
                    </S.ArticleBtnBlock>) 
                    : (
                        <button className="article__btn btn-hov02" onClick={() => setPhoneButton('show')}>
                          {phoneButton ? "Телефон" : "Показать телефон"} <span> {phoneButton ? product.user.phone : `${product.user.phone.slice(0, 5)} XXXXXXX`} </span>
                        </button>
                      )
                  }
                  <S.ArticleAuthor>
                    <S.AuthorImage>
                      <S.AuthorImageImg src="" alt=""/>
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