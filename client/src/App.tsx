import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BodySection from "./components/BodySection/BodySection";
import Services from "./components/BodySection/Services";
import Admin from "./Admin/Components/Admin";
import Dashboard from "./Admin/Components/Dashboard";
import DailyAccount from "./Admin/Components/DailyAccount";

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
        <Routes>
          <Route path="/" element={<BodySection />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/dailyaccount" element={<DailyAccount />} /> */}
          <Route element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dailyaccount" element={<DailyAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
