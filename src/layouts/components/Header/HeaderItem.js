import { NavLink } from "react-router-dom";

function HeaderItem({ to, title }) {
    return ( 
        <NavLink to={to} className={(nav) => `text-[#000000A6] cursor-pointer hover:text-black ${nav.isActive && 'text-black'}`}>
            {title}
        </NavLink>
    );
}

export default HeaderItem;