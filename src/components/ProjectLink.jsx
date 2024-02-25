export default function ProjectLink({ city, style, isActive, onClick}) {
  let className = "projects-list__link";

  if (isActive) {
    className += " active";
  }



  return (
    <li className="projects-list__item" onClick={onClick}>
      <span className={className}>
        {city + " " + style}
      </span>
    </li>
  );
}
