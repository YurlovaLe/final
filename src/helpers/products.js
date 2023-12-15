export const quantityReviews = (quantity) => {
  if ((quantity%10 >= 2 && quantity%10 <= 4) && !(quantity >= 12 && quantity <= 14)) {
    return (`${quantity} отзыва`)
  } else if (quantity&10 === 1 && quantity !== 11) {
    return (`${quantity} отзыв`)
  } else {
    return (`${quantity} отзывов`)
  }
};