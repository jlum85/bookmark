import React from "react";

const stack = [
  "React",
  "Redux",
  "React Router",
  "et de nombreuses autres librairies utiles"
];
const AboutPage = () => (
  <div>
    <h2>A propos</h2>
    <p>Cette application utilise : </p>
    <ul>
      {stack.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

export default AboutPage;
