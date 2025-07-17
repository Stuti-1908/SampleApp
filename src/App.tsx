import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/AuthContext.tsx";
import Header from "./components/Header.tsx";
import SelectorChecker from "./pages/SelectorChecker.tsx";
import Contact from "./pages/Contact.tsx";
import Login from "./pages/Login.tsx";

const queryClient = new QueryClient();

import React from "react";

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <SelectorChecker />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;