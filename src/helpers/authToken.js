export const getAuthFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user") || '{}');
}