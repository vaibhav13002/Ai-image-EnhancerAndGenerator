import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import VaibhavHome from "./components/VaibhavHome";
import ImageGenerator from "./components/ImageGenerator";
import logo from './V Ai.png';

const Header = () => (
  <header className="w-full flex items-center bg-white shadow-sm py-2 px-4 border-1">
    <Link to="/" className="flex items-center">
      <img src={logo} alt="Logo" className="h-8 w-8 mr-2 border-1" />
      <span className="text-xl font-bold text-gray-800">Vaibhav AI</span>
    </Link>
  </header>
);

const App = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Header always visible at top */}
            <Header />
            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <Routes>
                    <Route path="/" element={<VaibhavHome />} />
                    <Route
                        path="/enhancer"
                        element={
                            <div className="flex flex-col items-center justify-center py-8 px-4">
                                <div className="text-center mb-8">
                                    <h1 className="text-5xl font-bold text-gray-800 mb-2">
                                        AI Image Enhancer
                                    </h1>
                                    <p className="text-lg text-gray-500">
                                        Upload your Image and let AI enhance it in seconds!
                                    </p>
                                </div>
                                <Home />
                            </div>
                        }
                    />
                    <Route path="/generator" element={<ImageGenerator />} />
                </Routes>
            </div>

            {/* Footer always visible at bottom */}
            <footer className="text-center text-sm text-gray-500 py-4 border-2">
                Powered By @VaibhavAI
            </footer>
        </div>
    );
};

export default App;



// hex: #233846

// rgb: rgba(35,56,70,255)