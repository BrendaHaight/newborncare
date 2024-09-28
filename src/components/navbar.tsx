import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-tealish text-white p-4 fixed w-full top-0 z-10">
      <ul className="flex space-x-4 justify-center">
        {location.pathname !== "/" && (
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
        )}
        {location.pathname !== "/review" && (
          <li>
            <Link to="/review" className="hover:underline">
              Reviews
            </Link>
          </li>
        )}
        {location.pathname !== "/contact" && (
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
