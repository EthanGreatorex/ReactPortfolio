import Hero from "./Hero";
import TimeLine from "./TimeLine";
import Projects from "./Projects";
import React from "react";
import Scroll from "./Scroll";

function MainContent() {
    return (
        <>
        <section id="home"><Hero></Hero></section>
        <section id="about"><TimeLine></TimeLine></section>
        <section id="projects"><Projects></Projects></section>
        <Scroll></Scroll>
        </>
    )
}



export default MainContent;