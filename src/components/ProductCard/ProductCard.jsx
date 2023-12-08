import * as S from "./ProductCard.styles"

export const ProductCard = () => {
  return (
    <S.CardsItem>
      <S.CardsCard>
        <S.CardImage>
          <a href="/#" target="blank">
            <S.CardImageImg src="/img/icon_01.png" alt="Alternative name"/>
          </a>
        </S.CardImage>
        <div>
          <a href="/#" target="blank">
            <S.CardTitle>Ракетка для большого тенниса Triumph Pro ST</S.CardTitle>
          </a>
          <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
          <S.CardPlace>Санкт Петербург</S.CardPlace>
          <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
        </div>
      </S.CardsCard>
    </S.CardsItem>
  )
}

