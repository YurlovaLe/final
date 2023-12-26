import { useNavigate } from "react-router-dom";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { usePostProductMutation, usePostProductWithoutImageMutation } from "../../productsApi"

export const NewProductPage = () => {
  const [postProduct, {isError}] = usePostProductMutation();
  const [postProductWithoutImage, {isErrorImage}] = usePostProductWithoutImageMutation();
  const navigate = useNavigate();

  const handlePostProduct = async ({title, images, price, description}) => {
    if (images[0]) {
      const body = new FormData();
      body.append("files", images[0]);
      console.log(images);

      const response = await postProduct({title, description, price, body}).unwrap();
      navigate(`/product/${response.id}`);
    } else {
      const response = await postProductWithoutImage({title, description, price}).unwrap();
      navigate(`/product/${response.id}`);
    }

  }

  return <ProductForm text="Новое объявление" onFormClose={() => navigate(-1)} onFormSubmit={handlePostProduct}/>;
};
