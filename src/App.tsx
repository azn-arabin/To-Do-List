import React from "react";
import "./App.css";
import "./styles/common.css";
import ToDo from "./components/todo/ToDo";
import Container from "react-bootstrap/Container";
import TDNavbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import FinishedTask from "./components/finished-task/FinishedTask";
import Footer from "./components/common/Footer";
import CategoryList from "./components/category/CategoryList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-color-2)",
        color: "var(--txt-color-1)",
      }}
    >
      <ToastContainer autoClose={4000} />
      <TDNavbar />
      <Container>
        <Routes>
          <Route path={"/"} element={<ToDo />} />
          <Route path={"/finished"} element={<FinishedTask />} />
          <Route path={"/category"} element={<CategoryList />} />
        </Routes>
        <div className={"blur1"} />
        <div className={"blur2"} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
