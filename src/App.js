import logo from './logo.svg';
import './App.css';
import Header from './myComponents/header'; 
import Program from './myComponents/program'; 
import AboutUs from './myComponents/about'; 
import Campus from './myComponents/campus'; 
import Testimonials from './myComponents/testimonial'; 
import ContactUs from './myComponents/contact'; 
import Footer from './myComponents/footer'; 

function App() {
  return (
    <>
      <Header /> 
      <Program />
      <AboutUs />
      <Campus />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
