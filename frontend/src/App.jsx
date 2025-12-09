import React from "react";
import { Routes, Route } from "react-router";
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
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await axiosInstance.get("/auth/me");
      return res;
    },
    retry: false, //auth check
  });

  console.log({ data });
  console.log(isLoading);
  console.log(error);
  return (
    <div className="h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/notifications" element={<NotificationPage />}></Route>
        <Route path="/call" element={<CallPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/onboarding" element={<OnboardingPage />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
