import { Link } from "react-scroll";

function NavLink({ to, title }) {
  return (
    <Link
      to={to}
      className="p-4 cursor-pointer hover:bg-white transition-all ease-in-out"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      {title}
    </Link>
  );
}

export default NavLink;
