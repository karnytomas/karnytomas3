import React from 'react';
import OurValues from '../components/OurValues';
import SectionLast from '../components/SectionLast';
import TeamSection from '../components/About/TeamSection';
import Timeline from '../components/About/Timeline';



function About() {
  return (
    <>
      <TeamSection/>
      <Timeline/>
      <OurValues/>
      <SectionLast/>
    </>
  );
}

export default About;