import { BrowserRouter, Routes, Route } from "react-router";
import Home from "@/pages/home";
import AppLayout from "@/layout/AppLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
