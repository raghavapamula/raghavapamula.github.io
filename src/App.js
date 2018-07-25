import React, { Component } from 'react';
import Card, { ProfileCard, ProjectCard, IntroCard } from './Card.js';
import './App.css';
import styled from 'styled-components';
import Portal from './Portal/Portal.js';

let intro = "Hi there! My name is Raghava, and I am a student of Computer Science and Commerce at the University of Virginia. I enjoy learning and applying revolutionary technologies such as cryptocurrencies to make powerful tools for people to use.\n My main programming languages are Python, JavaScript, and C++. My most succesful project, Belacam, has been proven to be Scalable to over 10,000 users with a peak load of 2500 users.\nIf you would like to hire me or get in contact with me, the best way would be through email at rp2zd@virginia.edu.";
const VertCenter = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
`
intro = intro.split ('\n').map ((item, i) => <p key={i}>{item}</p>);

class App extends Component {
  componentWillMount() {
    this.handleResize();
    window.addEventListener("resize", () => this.handleResize());
  }
  
  componentDidMount() {
    var images = document.getElementsByClassName("image");
    for(let i=0; i < images.length; i++) {
      var img = images[i];
      var rect = img.parentNode.getBoundingClientRect();
      const width = rect.width - 75;
      img.width = width;
    }
  }

  handleResize() {
    this.setState({screenWidth: window.innerWidth});
    var images = document.getElementsByClassName("image");
    for(let i=0; i < images.length; i++) {
      var img = images[i];
      var rect = img.parentNode.getBoundingClientRect();
      const width = rect.width - 75;
      img.width = width;
    }
  }

  render() {
    if(this.state.screenWidth >= 900) {
      document.body.style = 'background: #eeeeee;';
      return (
        <div>
          <div className = "sideNav">
            <VertCenter>
              <div className="glass">
              <ProfileCard />
              </div>
            </VertCenter>
          </div>
          <div className="App">
            <IntroCard title="Intro" descrip={intro}></IntroCard>
            <ProjectCard title="Belacam" descrip="I Developed and co-founded a P2P monetized social media site currently with over 10,000 users. Users upload high quality image content and 'like' photos by donating the Belacoin cryptocurrency. Over 20,000 dollars have been sent between users to date." link="https://www.belacam.com/b/discover"><img className="image" src={require("./demo.gif")} /></ProjectCard>
            <ProjectCard title="Portal.js" descrip="I Developed a 2D platform game developed in ES6 JavaScript where the player destroys and avoids being hit by heat-seeking missiles. Use the Arrow Keys to move and the Mouse to shoot! You can play the full version by clicking the link below." link="https://raghavapamula.github.io/portal.js/"><Portal /></ProjectCard>
            <ProjectCard title="ThoughtScape" descrip="Image Uploading Social Media Platform with a Django-based backend. Handles authorization by hashing and salting passwords" link="https://github.com/raghavapamula/ThoughtScape"><img className="image" src={require("./thoughtscape.png")} /></ProjectCard>
          </div>
        </div>
      );
    } else {
        document.body.style = 'background: #e587a3;';
        return (
          <div>
            <ProfileCard />
            <IntroCard title="Intro" descrip={intro}></IntroCard>
            <ProjectCard title="Belacam" descrip="I Developed and co-founded a P2P monetized social media site currently with over 10,000 users. Users upload high quality image content and 'like' photos by donating the Belacoin cryptocurrency. Thousands of dollars have been sent between users to date." link="https://www.belacam.com/b/discover"><img className="image" src={require("./demo.gif")} /></ProjectCard>
            <ProjectCard title="Portal.js" descrip="I Developed a 2D platform game developed in ES6 JavaScript where the player destroys and avoids being hit by heat-seeking missiles. Use the Arrow Keys to move and the Mouse to shoot! You can play the full version by clicking the link below. (Warning! Game is not meant to run on mobile browsers)" link="https://raghavapamula.github.io/portal.js/"><img className="image" src={require("./portal.png")} /></ProjectCard>
            <ProjectCard title="ThoughtScape" descrip="Image Uploading Social Media Platform with a Django-based backend. Handles authorization by hashing and salting passwords" link="https://github.com/raghavapamula/ThoughtScape"><img className="image" src={require("./thoughtscape.png")} /></ProjectCard>
          </div>
        );
    }
  }
}

export default App;
