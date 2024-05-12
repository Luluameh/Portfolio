import React from "react";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import ScrollToTopButton from "./components/ScrollButton";
function App() {
  return (
    <div className="min-h-screen flex flex-col relative  md:px-0">
      <div id="home">
        <Home />
      </div>
      <div>
        
    </div>
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}

export default App;