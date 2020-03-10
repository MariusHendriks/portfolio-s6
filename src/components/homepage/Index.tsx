import React, { ReactElement } from "react";
import FadeIn from "react-fade-in";
import CourseTable from "../coursetable/index";

interface Props {}

export default function Index({}: Props): ReactElement {
  return (
    <div className="container">
      <FadeIn delay={100}>
        <h1>Bam</h1>
      </FadeIn>
      <FadeIn delay={500}>
        <h2>Leeswijzer</h2>
        <div className="s-tables">
          <CourseTable course="Strategy and concepting" />
          <CourseTable course="Professionele ontwikkeling" />
          <CourseTable course="User experience & User centered design" />
          <CourseTable course="Design & Development" />
        </div>
      </FadeIn>
    </div>
  );
}
