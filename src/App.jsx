import { useState } from 'react';
import './App.css'
import MyFooter from './components/myFooterSec/MyFooter'
import MyLayout from './components/myLayoutSecc/MyLayout'
import MyNavBar from './components/myNavBarSecc/MyNavBar'
function App() {

  const [scrollToggle, setScrollToggle] = useState(false);

  window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
          setScrollToggle(true);
      } else {
          setScrollToggle(false);
      }
  });
  return (
    <>
      <MyNavBar scrollToggle={scrollToggle}/>
      <MyLayout />
      <MyFooter />

    </>
  )
}

export default App
