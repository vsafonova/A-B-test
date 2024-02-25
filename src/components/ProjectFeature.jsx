export default function ProjectFeatures({ city, style, area, time, cost }) {
  return (
    <div className="projects-block__left--features">
      <div className="feature">
        <h3 className="title feature-title">City:</h3>
        <p className="paragraph name-city">{city}</p>
        <p className="paragraph style">{style}</p>
      </div>
      <div className="feature">
        <h3 className="title feature-title">Apartment area:</h3>
        <p className="paragraph area">{area}</p>
      </div>
      <div className="feature">
        <h3 className="title feature-title">Repair time:</h3>
        <p className="paragraph time">{time}</p>
      </div>
      <div className="feature">
        <h3 className="title feature-title ">Repair Cost:</h3>
        <p className="paragraph cost">{cost}</p>
      </div>
    </div>
  );
}
