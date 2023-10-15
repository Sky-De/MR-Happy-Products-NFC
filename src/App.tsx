import { FC } from "react";
import "./App.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Box from "./components/Box";
import { Light } from "./components/Light";

const App: FC = () => {
  return (
    <section
      role="application"
      className="border border-red-500 w-full h-screen flex flex-col"
    >
      <Header />
      <main>
        <h1>title</h1>
        <Routes>
          <Route path="/" element={<Box />} />
          <Route path="/light" element={<Light />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
};

export default App;
