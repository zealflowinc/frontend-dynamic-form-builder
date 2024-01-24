import sideBars from "../../datas/sideBar";
import SidebarMenu from "./SideBarMenu";

function SideBar() {
    return (
        <div className="w-[16.66666667%] flex flex-col px-3">
            <input
                className="px-3 py-[6px] border rounded-md outline-none mb-3 focus:shadow-lg transition-all"
                placeholder="Search field(s)"
            />

            <div className="max-h-[70vh] overflow-hidden overflow-y-scroll hide-scrollbar">
                {sideBars.map((sideBar, index) => (
                    <SidebarMenu key={index} sideBar={sideBar} />
                ))}
            </div>
        </div>
    );
}

export default SideBar;
