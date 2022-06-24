import './App.css';
// import { useState } from 'react';

function App() {
// const [billingTime,setbillingTime]= useState("month")


  // const togglePrice=()=>{
  //   // alert("Clicked")
  //   // document.querySelector(".priceHolder h2").classList.toggle("yearlyToggle");
  //   setbillingTime("year")
  // }
  return (
    <div className="container">

      <div className='wrapper'>
        <div className="title">

        <h1>Simple,traffic-based pricing </h1>
        <p>Sign-up for our 30-day trial. No credit card required</p>
        </div>
        <div className="priceMenu">
          <div className="priceHolder">
          <span>100K PAGEVIEWS</span>

          <h2>16.00 </h2>

          </div>

          <div className="sliderMenu">
            <input type="range" min={1} max={100} className="priceSlider" />

          </div>
          <div className="billingOptions">
            <p>Monthly Billing </p>
              <label className="switch">
          <input type="checkbox"  className="yearlyToggle"/>
          <span className="slider round"></span>
              </label>
              <p className='yearly'>Yearly Billing</p>
          </div>
          <hr className='seperator' />
          <div className="trialSection">
              <ul>
                <li>Unlimited Websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
              <input type="button" value="Start my trial" className='trialBtn'/>

          </div>
      </div>
      </div>
      </div>
  );
}

export default App;
