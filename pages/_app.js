import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";
import Cursor from "../components/cursor.js";
import NavBar from "../components/navbar.js";
import Footer from "../components/footer.js";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { PortfolioContextProvider } from "../context/portfolioContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
        appId={process.env.NEXT_PUBLIC_APP_ID}
      >
        <PortfolioContextProvider>
          <div className="bg-bg overflow-x-hidden ">
            <NavBar />
            <Cursor />
            <Component {...pageProps} />;
            <Footer />
          </div>
        </PortfolioContextProvider>
      </MoralisProvider>
    </AnimatePresence>
  );
}

export default MyApp;
