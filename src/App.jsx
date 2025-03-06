// src/App.jsx
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import StudyAbroad from "./components/StudyAbroad";
import ContactForm from "./components/ContactForm";
import HospitalList from "./components/HospitalList";
import HowItWorks from "./components/HowItWorks";
import FeedbackBanner from "./components/FeedbackBanner";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InfoCards />
      <StudyAbroad />
      <ContactForm />
      <HospitalList />
      <HowItWorks />
      <FeedbackBanner />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
