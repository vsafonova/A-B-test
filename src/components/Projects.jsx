import { useState } from "react";
import ProjectFeatures from "./ProjectFeature";
import Carousel from "./Carousel";
import ProjectLink from "./ProjectLink";

const projectsData = [
  {
    city: "Stockholm",
    style: "LCD admiral",
    area: "81 m2",
    time: "3.5 months",
    cost: "Upon request",
    image: "./images/slider1.png",
  },
  {
    city: "Uppsala",
    style: "Thieves",
    area: "105 m2",
    time: "4 months",
    cost: "Upon request",
    image: "./images/slider2.png",
  },
  {
    city: "Kiruna",
    style: "Patriotic",
    area: "93 m2",
    time: "3 months",
    cost: "Upon request",
    image: "./images/slider3.png",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const randomizeVizitor = Math.random();
  let variant = "Bigger font-size";

  if (randomizeVizitor > 0.5) {
    variant = "Smaller font-size";
  }
  const [siteVariant] = useState(variant);

  const project = projectsData[index];

  function setIndexCircle(i) {
    i = (i + projectsData.length) % projectsData.length;
    setIndex(i);
  }

  //A/B testing
  let className = "projects";

  if (siteVariant === "Bigger font-size") {
    className += " size-font";
  }

  return (
    <section className={className} id="project">
      <div className="container">
        <div className="projects-block__left">
          <h2 className="title completed-projects">
            Completed <br />
            projects
          </h2>
          <p className="paragraph">
            Only a small part of the work performed by our company is presented
            on the site. For 14 years on in the construction <br />
            market we have made happy more than 1000 families
          </p>
          <ProjectFeatures
            city={project.city}
            style={project.style}
            area={project.area}
            cost={project.cost}
            time={project.time}
          />
          <Carousel
            totalElements={projectsData.length}
            currentIndex={index}
            setIndex={setIndexCircle}
            variant={siteVariant}
          />
        </div>
        <div className="projects-block__right">
          <ul className="projects-list">
            {projectsData.map((p, i) => {
              const isActive = index === i;
              return (
                <ProjectLink
                  city={p.city}
                  style={p.style}
                  key={p.city}
                  isActive={isActive}
                  onClick={() => setIndex(i)}
                />
              );
            })}
          </ul>
          <div className="projects-images">
            <img className="design-image" src={project.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
