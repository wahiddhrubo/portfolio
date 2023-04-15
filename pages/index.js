import Head from "next/head";
import Image from "next/image";
import { MoralisProvider } from "react-moralis";
import Loader from "../components/preloader.js";
import Cursor from "../components/cursor.js";
import Header from "../components/header.js";
import About from "../components/about.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Head>
        <title>WD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Loader />
        <Cursor />
        <Header />
        <div className="lg:w-[1200px] w-[380px] mx-auto text-white ">
          <About />
          <Projects />
          <Contact />
        </div>
      </AnimatePresence>
    </div>
  );
}
