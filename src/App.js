import React, { Component } from 'react';
import HeaderCarousel from './components/HeaderCarousel';
import HeadlineAndText from './components/HeadlineAndText';
import ImageAndText from './components/ImageAndText';
import ScrollSuits from './components/ScrollSuits';
import { images } from './images';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <HeaderCarousel carouselHeadline="Men's Fashion" />
       <div className="contentContainer">
        <HeadlineAndText headline="Fashion" text="Take a deep dive in to the fashion on of men, real suits, stylish stuits, the best suits for real men" textTwo="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quam neque consectetur sed quis blanditiis libero nemo ea quos iusto." />
        <ImageAndText image={images.img10} text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sapiente temporibus saepe, quibusdam voluptates eligendi nesciunt molestias quae nihil libero ex, similique totam? Possimus, explicabo beatae praesentium repudiandae cum reprehenderit?" textHeadline="Custom Taylored Suits"/>
        <ImageAndText image={images.img7} text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi expedita soluta perferendis quam odit, esse molestiae dicta commodi eos distinctio facilis, facere quas ducimus maiores eius sit rerum reiciendis minus." />
        <ScrollSuits />
        </div>
      </div>
    );
  }
}

export default App;


