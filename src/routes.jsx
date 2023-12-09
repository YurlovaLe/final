import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SellerProfilePage } from "./pages/SellerProfilePage/SellerProfilePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NewProductPage } from "./pages/NewProduct/NewProductPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { Reviews } from "./components/Reviews/Reviews";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/seller-profile" element={<SellerProfilePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/new-product" element={<NewProductPage />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  )
}