import React from "react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import CallPage from "./pages/CallPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import OnboardingPage from "./pages/OnboardingPage.jsx";
import { axiosInstance } from "./lib/axios.js";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const {
    data: authData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res;
    },
    retry: false, //auth check
  });

  const authUser = authData?.user;
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/notifications"
          element={authUser ? <NotificationPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/call"
          element={authUser ? <CallPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/chat"
          element={authUser ? <ChatPage /> : <Navigate to="/login" />}
        ></Route>
        <Route
          path="/onboarding"
          element={authUser ? <OnboardingPage /> : <Navigate to="/login" />}
        ></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
