"use client"

import Topbar from "../Components/Top";
import Bar from "../Components/Nav";
import About from "../Components/About";
import Skills from "../Components/Skills"
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import '../styles/globals.css'
import "aos/dist/aos.css"
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
export default function Home() {
  useEffect (() =>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:100,
    });
    AOS.refresh();
  },[]);
  return (
    <div>
     <Topbar/>
     <Bar/>
     <About/>
    <Skills/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}
