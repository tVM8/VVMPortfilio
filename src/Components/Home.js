import React from 'react';
import myProfilePicpic from "./profile-pic.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main className='home'>
        <div className='homeinfo'>
          <span>Hello,</span>
          <h1>I am <span className='vin'>Vineet,</span></h1>
          <h1 className='fsd'>Full Stack Developer</h1>
          <p className='p'>Seeking an entry level position with growing organization,</p>
          <p className='p'>where I can utilize my analytical thinking, technical & management skills.</p>
          <a download="Vineet-Magdum's-Resume.pdf" href='Content./Vineet Magdum Resume.pdf'><button className='resume left'>Download Resume</button></a>
          <Link exact to="/contact"><button className='hireme right' >Hire Me</button></Link>
        </div>
        <div className='myimg'>
          <img src={myProfilePicpic} alt="myProfilePic" />
        </div>
      </main>
      
    </>
  );
}

export default Home;