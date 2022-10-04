import { menuElementType } from "../../data/menuData";
import { Link, useNavigate } from "react-router-dom";

export function Navbar({ menu }: NavbarProps) {

  const navigate = useNavigate()

  return (
    <>
      <div className="nav">
        {menu.map((el) => (
          <>
            {/* <div  onClick={()=>navigate(`/${el.title.toLowerCase()}`)}>
              {el.title}
            </div> */}
            <Link className="navElement" to={`/${el.title.toLowerCase()}`}>{el.title}</Link>
          </>
        ))}
      </div>
    </>
  );
}

type NavbarProps = {
  menu: Array<menuElementType>;
};
