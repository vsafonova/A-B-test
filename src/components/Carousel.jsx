export default function Carousel({ currentIndex, setIndex, totalElements }) {
  const dots = [];

  for (let i = 0; i < totalElements; i++) {
    let className = "carousel-dots";

    if (i === currentIndex) {
      className += " active";
    }

    dots.push(<div className={className} key={i}></div>);
  }

  function goPrevious() {
    setIndex(currentIndex - 1);
  }

  function goNext() {
    setIndex(currentIndex + 1);
  }

  return (
    <div className="carousel">
      <div className="last-slide">
        <div className="carousel-last" onClick={goPrevious}>
          <img src="images/GroupL.svg" alt="Go to last slide" />
        </div>
      </div>
      <div className="dots-links">{dots}</div>
      <div className="next-slide">
        <div className="carousel-next" onClick={goNext}>
          <img src="images/GroupR.svg" alt=" Go to the next slide" />
        </div>
      </div>
    </div>
  );
}
