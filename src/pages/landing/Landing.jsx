import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Introduction from '../../components/introduction/Introduction'
import Rules from '../../components/rules/Rules'
import Criteria from '../../components/judging-criteria/Criteria'
import FAQ from '../../components/FAQs/FAQ'
import Timeline from '../../components/timeline/Timeline'
import Prizes from '../../components/prizes/Prizes'
import Partners from '../../components/partners/Partners'
import Terms from '../../components/terms/Terms'
import Footer from '../../components/footer/Footer'
import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Landing = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(()=>{
    const handleScrollButtonVisibility =()=>{
      window.pageYOffset > 800 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll",handleScrollButtonVisibility);
    };
  }, []);

  const handleScrollToTop =()=>{
    window.scrollTo({ top: 0, behavior: "smooth"});
  };


  return (
    <div>
        <Header/>
        <Introduction/>
        <Rules/>
        <Criteria/>
        <FAQ/>
        <Timeline/>
        <Prizes/>
        <Partners/>
        <Terms/>
        <Footer/>
        {showButton &&
   <div className="fixed cursor-pointer primaryColor bottom-[3rem] sm:right-[2rem] right-[4px]" onClick={handleScrollToTop}>
    <BsFillArrowUpSquareFill size={30} color="white" className=''/>

   </div> 
   }
        </div>
  )
}

export default Landing