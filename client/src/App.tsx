import React, { createContext, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BodySection from "./components/BodySection/BodySection";
import Services from "./components/BodySection/Services";

// Define the AuthContext type
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
