import React from "react";
import "./about.scss";
import PText from "../../components/pText/PText";
// import Button from "../../components/button/Button";
import Img from "../../assets/images/20210731_201813.jpg";
import AboutItem from "../../components/aboutItem/AboutItem";
import ContactBanner from "../../components/contactBanner/ContactBanner";
import { skills } from "../../assets/data/data";

export default function About() {
  return (
    <main className="about-page">
      <article className="about">
        <div className="left">
          <p className="subheading">
            Hi, I am <span>Art&#363;ras Ju&#353;kys</span>
          </p>
          <h2>Aspiring Front-End and Back-End Developer</h2>
          <div className="info">
            <PText>
              I believe self development to be top priority in everyone's life,
              including my own professional life. I aspire to become a part of a
              team that develops cutting edge web solutions for everyone.
            </PText>
            <PText>
              Developing technical and problem solving skills have become a big
              part of my life. Personal projects that I'm working on reflect
              knowledge in: Node.js, React, Redux, Express, PostgreSQL, MongoDB,
              HTML, CSS.
            </PText>
            <PText>
              Through my personal learning experience and projects I gained
              understanding how to program solutions that interact with 3rd
              party APIs and how to design and build RESTful API on my own.
            </PText>
            {/* <Button btnText="Download CV" btnLink="#" /> */}
            <a
              className="button-cv"
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1_GijclZpXcdmtU6ahBVLJ-iIjEygbTEk/view?usp=sharing"
            >
              View CV
            </a>
          </div>
        </div>
        <div className="right">
          <img src={Img} alt="Art&#363;ras Ju&#353;kys" />
        </div>
      </article>
      <article className="education">
        <h2>Education</h2>
        <AboutItem
          title="School"
          items={["Jurbarkas Vytautas Magnus school, Jurbarkas, Lithuania"]}
        />
        <AboutItem
          title="Collage"
          items={["Peterborough Regional College, Peterborough, UK"]}
        />
        <AboutItem
          title="Online"
          items={[
            "Full-Stack Engineer Career Path, Codecademy",
            "The Complete JavaScript Course 2021: From Zero to Hero, Udemy",
          ]}
        />
      </article>
      <article className="skills">
        <h2>Skills</h2>
        <AboutItem title="Front-End" items={skills.frontEnd} />
        <AboutItem title="Back-End" items={skills.backEnd} />
        <AboutItem title="Others" items={skills.other} />
      </article>
      <ContactBanner />
    </main>
  );
}
