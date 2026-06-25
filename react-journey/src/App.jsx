import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Count from './components/Counter';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="profile-container">
        <Profile name="Rahul" role="Frontend Developer" age={24} />
        {/* <Profile name="Priya" role="UI Designer" age={22} />
        <Profile name="Amit" role="React Learner" age={21} /> */}
      </div>
      <Count />
      <Footer />
    </>
  );
}

export default App;