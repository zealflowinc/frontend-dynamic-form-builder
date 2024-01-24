import { useState } from 'react';

const menus = ['Display', 'Data', 'Validation', 'Submission', 'Conditional', 'Logic', 'Layout'];

function ModalHeader() {
    const [focusItem, setFocusItem] = useState(0);

    return (
        <div className="w-full px-2 pt-2 bg-[#d2d2d208] flex flex-wrap gap-2 border-b border-[#bebebe]">
            {menus.map((menu, index) => (
                <div
                    className={`p-2 rounded-t-md border-t border-r border-l text-[14.08px] font-medium cursor-pointer z-10 translate-y-[1px] transition-all  ${
                        focusItem === index
                            ? 'text-[#000000] bg-white border-[#bebebe]'
                            : 'text-[#0d6efd] border-transparent hover:bg-[#dddddd08] hover:border-[#dfdfdf]'
                    } `}
                    onClick={() => setFocusItem(index)}
                    key={index}
                >
                    {menu}
                </div>
            ))}
        </div>
    );
}

export default ModalHeader;
