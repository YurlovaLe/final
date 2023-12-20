import { useNavigate } from "react-router-dom";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { usePostProductMutation } from "../../productsApi"

export const NewProductPage = () => {
  const [postProduct, {isError}] = usePostProductMutation();
  const navigate = useNavigate();

  const handlePostProduct = async ({title, description, price}) => {
    const response = await postProduct({
      title,
      description,
      price,
    }).unwrap();
    navigate(`/product/${response.id}`);
  }

  return <ProductForm text="Новое объявление" onFormClose={() => navigate(-1)} onFormSubmit={handlePostProduct}/>;
};
