import * as S from "./ProductCard.styles"

export const ProductCard = ({img, title, price, city, date, onClick}) => {
  return (
    <S.CardsItem onClick={onClick}>
      <S.CardsCard>
        <S.CardImage>
          <S.CardImageImg src={img ? `http://localhost:8090/${img}` : '/img/icon_01.png'} alt="Alternative name"/>
        </S.CardImage>
        <div>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardPrice>{price} ₽</S.CardPrice>
          <S.CardPlace>{city}</S.CardPlace>
          <S.CardDate>{date}</S.CardDate>
        </div>
      </S.CardsCard>
    </S.CardsItem>
  )
}


