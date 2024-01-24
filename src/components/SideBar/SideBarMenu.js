import { useState } from 'react';
import ItemMenu from './ItemMenu';

function SidebarMenu({ sideBar }) {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className='overflow-hidden border rounded-lg'>
            <h1 className="w-full px-3 py-[6px] bg-[#F8F9FA] cursor-pointer border-b z-10" onClick={() => setOpenMenu(!openMenu)}>
                {sideBar.title}
            </h1>
            <div className={`${openMenu ? 'py-2' : 'h-0'} transition-all`}>
                {sideBar.props.map((item, index) => (
                    <ItemMenu key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

export default SidebarMenu;
