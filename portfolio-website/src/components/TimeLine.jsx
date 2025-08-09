import "../css/timeline.css";
import React from "react";
import { useFadeInOnScroll } from "../hooks/FadeInOnScroll";

function TimeLine() {

  const fadeRef = useFadeInOnScroll();

  return (
    <div className="timeline" >
      <div className="timeline__timeline-item" ref={fadeRef}>
        <p className="timeline-item__date">2025</p>
        <h1 className="timeline-item__title">18 Years old</h1>
        <p className="timeline-item__description">Going into the second year of my T-Level course alongside a work placement at Bloc Digital</p>
      </div>
      <div className="timeline__timeline-item " ref={fadeRef} >
        <p className="timeline-item__date">2024</p>
        <h1 className="timeline-item__title">17 Years old</h1>
        <p className="timeline-item__description">Currently taking on a T-Level Digital Design, Production and Development course at Derby College</p>
      </div>
      <div className="timeline__timeline-item " ref={fadeRef} >
        <p className="timeline-item__date">2022</p>
        <h1 className="timeline-item__title">15 Years old</h1>
        <p className="timeline-item__description">I started and completed an A-Level in Computer Science & GCSE Statistics</p>
      </div>
      <div className="timeline__timeline-item " ref={fadeRef} >
        <p className="timeline-item__date">2021</p>
        <h1 className="timeline-item__title">14 Years old</h1>
        <p className="timeline-item__description">I decided to take a Computer Science & ICT IGCSE, which sparked my passion for programming</p>
      </div>
      <div className="timeline__timeline-item " ref={fadeRef} >
        <p className="timeline-item__date">2019</p>
        <h1 className="timeline-item__title">12 Years old</h1>
        <p className="timeline-item__description">I started my Mathematics & English IGCSEs & finished them in 2020 and 2021</p>
      </div>
      <div className="timeline__timeline-item " ref={fadeRef} >
        <p className="timeline-item__date">2018</p>
        <h1 className="timeline-item__title">11 Years old</h1>
        <p className="timeline-item__description">I became Home Educated; this allowed much more flexibility in my work as well as more family time</p>
      </div>
    </div>
  );
}

export default TimeLine;
