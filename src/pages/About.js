import React from 'react';
import OurValues from '../components/OurValues';
import SectionLast from '../components/SectionLast';
import TeamSection from '../components/About/TeamSection';
import Timeline from '../components/About/Timeline';
import Timeline2 from '../components/About/Timeline2';



function About() {
  return (
    <>
      <TeamSection/>
      <Timeline/>
      <OurValues/>
      <Timeline2/>
      <SectionLast/>
    </>
  );
}

export default About;