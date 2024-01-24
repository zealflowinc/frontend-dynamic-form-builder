import { useContext } from "react";
import { BuilderContext } from "../../pages/Builder/Builder";

function ItemMenu({ item }) {
    const context = useContext(BuilderContext)

    const handleDrag = (e) => {
        context.setBeingPulled(item)
    }

    return (
        <div
            className="flex items-center text-[#0d6efd] text-[12px] px-2 py-1 mb-1 mx-2 rounded-[4px] border border-[#0d6efd] cursor-pointer transition-all hover:bg-[#0d6efd] hover:text-white"
            draggable
            onDrag={(e) => handleDrag(e)}
        >
            {item.icon}
            <h1 className="ml-2">{item.title}</h1>
        </div>
    );
}

export default ItemMenu;
