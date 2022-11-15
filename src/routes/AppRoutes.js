import {
    Route,
    Navigate,
    BrowserRouter as Router,
    Routes as Switch,

  } from "react-router-dom";
  import {  Suspense, useEffect } from "react";
  import { privateRoutes, publicRoutes } from "./routes";
  import {BarsLoader} from "../components/loader/Loader"
  
  const AppRoutes = () => {

    const isAuth = false
  
    useEffect(()=>{
      if(isAuth){
        <Navigate to = "/home"/>
      }
    },[isAuth])

    return (
      <Suspense
        fallback={<BarsLoader/>}
      >
        <Router>
          <Switch>
            {publicRoutes.map(({ element: Element, path, index }) => (
              <Route path={path} key={index} element={<Element />} />             
            ))}
  
            {!isAuth ? (
              <Route path="/*" element={<Navigate to="/login" />} />
            ) : (
              privateRoutes.map(({ element: Element, path, index }) => (
                <>
                <Route path={path} key={index} element={<Element />} />
                <Route path="/*" element={<Navigate to="/" />} />
                </>
              ))
            )}
          </Switch>
        </Router>
      </Suspense>
    );
  };
  
  export default AppRoutes;
  