export const getTokenFromLocalstorage = () => {
  return getAuthFromLocalStorage().accessToken;
}

export const getAuthFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user") || '{}');
}