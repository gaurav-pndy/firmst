// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import StudyAbroad from "./components/StudyAbroad";
import ContactForm from "./components/ContactForm";
import HospitalList from "./components/HospitalList";
import HowItWorks from "./components/HowItWorks";
import FeedbackBanner from "./components/FeedbackBanner";
// import TeamSection from "./components/FeedbackSection";
import Footer from "./components/Footer";
import { useRef } from "react";
import FeedbackSection from "./components/FeedbackSection";

function App() {
  const contactFormRef = useRef();
  return (
    <div>
      <Navbar />
      <HeroSection contactFormRef={contactFormRef} />
      <InfoCards />
      <StudyAbroad />
      <ContactForm contactFormRef={contactFormRef} />
      <HospitalList />
      <HowItWorks />
      <FeedbackBanner />
      <FeedbackSection />
      <Footer />
    </div>
  );
}

export default App;
