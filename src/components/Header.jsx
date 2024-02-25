export default function Header() {
  return (
    <header className="header">
      <div className="container navigation">
        <div className="logo">IC "Repair Design Project"</div>
        <nav>
          <ul className="header-navigation">
            <li className="header-navigation__item active">
              <a className="header-navigation__link" href="#">
                Home
              </a>
            </li>
            <li className="header-navigation__item">
              <a className="header-navigation__link" href="#project">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <div className="contacts">
          <div className="contacts-phone">
            <a href="tel:+46 76 000 0000" className="header-navigation__link">
              +46 76 000 0000
            </a>
          </div>
          <button className="request">Request a call</button>
        </div>
      </div>
      <div className="header-block">
        <div className="header-block-background"></div>
        <div className="container-overlay"></div>
        <div className="container">
          <h1 className="title">
            Turnkey Repair in the <br />
            city of <span className="city">Stockholm</span>
          </h1>
          <p className="paragraph text">
            Get ready-made turnkey repairs on time <br />
            with work time saving up to 45 days and 20% from <br />
            cost of materials due to the organization of work
          </p>
          <button className="calculate">CALCULATE THE COST</button>
          <button className="submit active">SUBMIT YOUR APPLICATION</button>
        </div>
      </div>
    </header>
  );
}
