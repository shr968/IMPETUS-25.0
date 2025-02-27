import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import { motion } from "framer-motion";
import useSound from 'use-sound';
import Stats from "./components/Stats"
import Events from "./components/Events"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import EventsPage from "./components/EventsPage"
import AboutTheme from "./components/Theme"

const App = () => {
  const [showApp, setShowApp] = useState(false);
  const [booting, setBooting] = useState(false);
  const [rebootSound] = useSound("/reboot.mp3");
  const [mainSound]=useSound("/main.mp3");
  const [welcomeSound] = useSound("/sounds/welcome.mp3");
  const [tickSound] = useSound("/sounds/tick.mp3");
  useEffect(() => {
    mainSound(); // Play main sound when component mounts
  }, [mainSound]);
<video
  autoPlay
  muted
  playsInline
  style={{ display: "none" }}
  onPlay={() => {
    mainSound();  // Play sound when the video starts
  }}
>
  <source src="/silent.mp4" type="video/mp4" />
</video>

  const [initializationComplete, setInitializationComplete] = useState(false);
  const [coreSystemsLoaded, setCoreSystemsLoaded] = useState(false);

  const [isOldTheme, setIsOldTheme] = useState(true); // State for theme

  const handleReboot = () => {
    setIsOldTheme(false); // Switch to new theme
    setBooting(true);
    rebootSound();
    setTimeout(() => {
      setInitializationComplete(true);
      tickSound();
      setTimeout(() => {
        setCoreSystemsLoaded(true);
        tickSound();
        setTimeout(() => {
          setShowApp(true);
          welcomeSound();
        }, 2000);
      }, 2000);
    }, 900);
  };

  const oldThemeStyles = {
    backgroundColor: "#222",
    color: "#ddd",
    fontFamily: "Courier New, monospace",
    fontSize: "1.3rem",
    backgroundImage: "url('/main-bg.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    width: "100vw",   
    height: "100vh",  
    position: "fixed", 
  };
  
  const backgroundOverlay = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Black overlay with opacity (0.4)
    zIndex: -1, // Ensure the overlay stays behind the content
  };
  const newThemeStyles = {
    backgroundColor: "#111",
    color: "#eee",
    fontFamily: "Roboto, sans-serif", // SpaceX-like font
    fontSize: "1rem",
    backgroundImage: "url('/images/modern-tech.jpg')", // Modern image
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  };

  return (
    <>
      {!showApp ? (
        <div
          className="flex flex-col items-center justify-center h-screen"
          style={isOldTheme ? oldThemeStyles : newThemeStyles} // Apply theme
        >
          {!booting ? (
            <>
 <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  style={{
    position: "absolute",  // Position it above the heading
    top: "10%",            // Adjusted to go further above the heading
    left: "50%",
    transform: "translateX(-50%)",
    width: "520px",        // Set the width of the image
    height: "auto",       // Set the height of the image
    borderRadius: "50%",   // Makes the image rounded
    objectFit: "cover"   // Ensures the image covers the container without distortion
  }}
>
  <img src="/IEEE-Logo.png" alt="Logo" />
</motion.div>

{/* Heading Text */}
<motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    fontSize: "3.3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginTop: "7rem",
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
    textShadow: "2px 2px 4px #000000",
    textAlign: "center",
    width: "100%",
    display: "block",
    lineHeight: "1.5", // Adjust the line-height here
  }}
>
  25 Years of IEEE UVCE
</motion.h1>



<motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  style={{
    fontSize: "2rem",
    marginBottom: "1rem",
    fontStyle: "italic",
    color: "#aaa",
    textAlign: "center", // Ensures it is centered
    width: "100%",
    display: "block",
    lineHeight: "1.8", // Increase space between lines on mobile, if it wraps
  }}
>
  Legacy Rebooted
</motion.h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#000", // Purple color for the button
                  color: "#fff",
                  borderRadius: "0.5rem",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  border: "1px solid #555",
                  boxShadow: "1px 1px 3px #000000",
                }}
                onClick={handleReboot}
              >
                Reboot
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  fontSize: "2rem",
                  color: "#00FF00",
                }}
              >
                . . .
              </motion.div>

              <motion.p
                className="text-lg mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ color: "#00FF00", fontWeight: "bold", fontSize: "1.2rem", textShadow: "1px 1px 2px #000" }}
              >
                Initializing...
                {initializationComplete && <span style={{ color: "green", marginLeft: "0.5rem" }}>&#10004;</span>}
              </motion.p>

              {initializationComplete && (
                <motion.p
                  className="text-lg mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ color: "#00FF00", fontWeight: "bold", fontSize: "1.2rem", textShadow: "1px 1px 2px #000" }}
                >
                  Loading core systems...
                  {coreSystemsLoaded && <span style={{ color: "green", marginLeft: "0.5rem" }}>&#10004;</span>}
                </motion.p>
              )}

              {coreSystemsLoaded && (
                <motion.p
                  className="text-lg mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ color: "#00FF00", fontWeight: "bold", fontSize: "1.2rem", textShadow: "1px 1px 2px #000" }}
                >
                  Reboot Complete. Welcome!
                </motion.p>
              )}

              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "repeating-linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0.1) 1px, rgba(0,0,0,0) 2px)",
                  pointerEvents: "none",
                  animation: "scanlines 3s linear infinite",
                }}
              ></motion.div>
            </motion.div>
          )}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"
          
        >
          <Header />
          <Hero />
          <Roadmap />
          <AboutTheme/>
          <Stats />
          <Events />
          <Gallery />
          <Contact />
          <Footer />
        </motion.div>
      )}
      <ButtonGradient />
    </>
  );
};

export default App;
