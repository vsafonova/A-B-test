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

  const project = projectsData[index];

  function setIndexCircle(i) {
    i = (i + projectsData.length) % projectsData.length;
    setIndex(i);
  }

  return (
    <section className="projects" id="project">
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
        <div className="projects-block__mobile">
          <h2 className="title subtitle completed-projects">
            Completed <br />
            projects
          </h2>
          <p className="paragraph">
            Only a small part of the work performed by our company is presented
            on the site. For 14 years on in the construction <br />
            market we have made happy more than 1000 families
          </p>
          <div className="projects-room"></div>
          <div className="sliderNavigation">
            <div className="sliderNavigation-last">
              <img src="/src/images/last.svg" alt="Go to last slide" />
            </div>
            <div className="sliderNavigation-next">
              <img src="./images/next.svg" alt="Go to next slide" />
            </div>
          </div>
          <div className="projects-block__left--features">
            <div className="feature">
              <h3 className="title feature-title">City:</h3>
              <p className="paragraph">
                Rostov-on-Don <br />
                LCD admiral
              </p>
            </div>
            <div className="feature">
              <h3 className="title feature-title">Apartment area:</h3>
              <p className="paragraph">
                81 m<sup>2</sup>
              </p>
            </div>
            <div className="feature">
              <h3 className="title feature-title">Repair time:</h3>
              <p className="paragraph">3.5 months</p>
            </div>
            <div className="feature">
              <h3 className="title feature-title ">Repair Cost:</h3>
              <p className="paragraph">Upon request</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
