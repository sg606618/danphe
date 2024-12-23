import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BodySection from "./components/BodySection/BodySection";
import Services from "./components/BodySection/Services";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  const authContextValue: AuthContextType = {
    isAuthenticated,
    setIsAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BodySection />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Product />} />
            <Route path="category" element={<Category />} />
          </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
