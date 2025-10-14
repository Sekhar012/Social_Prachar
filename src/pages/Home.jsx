import CareerForm from "../components/CareerForm";
import Banner from "../appcomponents/Banner";
import CareerDecision from "../appcomponents/CareerDecision";
import Features from "../appcomponents/Features";
import Cards from "../appcomponents/Cards";
import SpAudience from "../appcomponents/SpAudience";
import SecuritySection from "../appcomponents/SecuritySection";
import CareerStages from "../appcomponents/CareerStages";
import About from "../appcomponents/About";
import Testimonials from "../appcomponents/Testimonials";
import Faqsection from "../appcomponents/Faqsection";
import Ctasection from "../appcomponents/Ctasection";
import Footer from "../components/Footer";
import CareerBlueprint from "../appcomponents/CareerBlueprint";

export default function Home() {
  return (
    <div className="container mt-4">
      <Banner/>
      <CareerDecision/>
       <Features/>
       < Cards/>
       <SecuritySection/>
       <SpAudience/>
       <CareerStages/>
       <CareerBlueprint/>
       <About/>
       <Testimonials/>
      <Faqsection/>
      <Ctasection/>
      <Footer/>


      {/* <h2>Career Switch Tool</h2>
      <CareerForm /> */}

      
    </div>
  );
}
