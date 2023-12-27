import { useEffect, useState } from "react";
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles';
import {getAuthFromLocalStorage} from "./helpers/authToken"
import './App.css';
import { useDispatch } from "react-redux";
import { setUser } from "./slices/authSlice";


function App() { 
  const [isAppLoading, setIsAppLoading] = useState(true);
  const dispatch = useDispatch();
  const user = getAuthFromLocalStorage();

  useEffect (() => {
    // проверить что токены еще актуальные
    dispatch(setUser(user));
    setIsAppLoading(false);
  }, [dispatch, user]);

  if (isAppLoading) {
    return null;
  }

  return (
    <div className="App">
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;
