const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

export const publicationDate = (publicationDay) => {
  const oneDayInMillisec = 86400000;

  const now = new Date();
  const todayString = now.toISOString().slice(0, 10);
  const millisecToday = new Date (todayString).getTime();

  const date = new Date(publicationDay);
  const dateString = date.toISOString().slice(0, 10);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = (date.getHours() < 10 ) ? `0${date.getHours()}` : date.getHours();
  const minutes = (date.getMinutes() < 10 ) ? `0${date.getMinutes()}` : date.getMinutes();
  const millisecDate = new Date (dateString).getTime();

  if (todayString === dateString) {
    return (`Сегодня в ${hours}:${minutes}`);
  } else if (millisecToday - millisecDate <= oneDayInMillisec) {
    return (`Вчера в ${hours}:${minutes}`);
  } else {
    return (`${day} ${month} в ${hours}:${minutes}`);
  }
};

export const sellsFromDate = (publicationDate) => {
  const date = new Date(publicationDate);
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return(`Продает товары с ${month} ${year}`)
}