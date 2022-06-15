import React, { Component } from 'react';
import './About.css';
import profile_pic from '../assets/profile_pic.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
      <div class="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src = {profile_pic}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Rishi Trivedi</div>
          <div className="brief_description">
          <p >My name is Rishi Trivedi. I am a computer science major at Virginia Commonwealth University. I will be graduating on May 2024. </p> 
          </div>
        </div>
      </div>
    </div>
    )
  }
}