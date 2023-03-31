export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/movies">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/podcast">
              Podcast
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
