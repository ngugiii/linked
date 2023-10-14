import React from 'react'
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

const Landing = () => {
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
        </div>
  )
}

export default Landing