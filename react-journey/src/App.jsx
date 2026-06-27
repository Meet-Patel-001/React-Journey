import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Count from './components/Counter';
import UserList from './components/UserList';
import Status from './components/LoginStatus';
import UserForm from './components/UserForm';
import StudentManager from './components/StudentManager/StudentManager';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <div className="profile-container">
        <Profile name="Rahul" role="Frontend Developer" age={24} />
        <Profile name="Priya" role="UI Designer" age={22} />
        <Profile name="Amit" role="React Learner" age={21} />
      </div> */}
      {/* <Count /> */}
      {/* <UserList  /> */}
      {/* <Status /> */}
      {/* <UserForm /> */}
      <StudentManager />
      <Footer />
    </>
  );
}

export default App;