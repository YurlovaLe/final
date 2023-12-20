import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { SellerProfilePage } from "./pages/SellerProfilePage/SellerProfilePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { NewProductPage } from "./pages/NewProduct/NewProductPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { Reviews } from "./components/Reviews/Reviews";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { useSelector } from "react-redux";
import { selectAuth } from "./slices/authSlice";

// const isAuth = true;

export const AppRoutes = () => {
  const { accessToken } = useSelector(selectAuth);
  return (
    <Routes>
      <Route path="/" element={<MainPage isAllowed={accessToken}/>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute redirectPath="/" isAllowed={accessToken}>
            <ProfilePage isAllowed={accessToken}/>
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/new-product"
        element={
          <ProtectedRoute redirectPath="/" isAllowed={accessToken}>
            <NewProductPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/seller-profile/:sellerId" element={<SellerProfilePage isAllowed={accessToken}/>} />
      <Route path="/product/:productId" element={<ProductPage isAllowed={accessToken}/>} />
      <Route path="/reviews" element={<Reviews isAllowed={accessToken}/>} />
    </Routes>
  )
}