import { createContext, useState } from 'react';
import { SideBar } from '../../components/SideBar';
import { ModalComponent } from '../../components/ModalComponent';
import { Button } from 'antd';

export const BuilderContext = createContext();

function Builder() {
    const [beingPulled, setBeingPulled] = useState({});
    const [itemDrop, setItemDrop] = useState({});
    const [modal, setModal] = useState(false);

    const value = {
        beingPulled,
        setBeingPulled,
    };

    const handleDaragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        setItemDrop(beingPulled);
        setModal(true);
        setBeingPulled({});
    };

    const handleClose = () => {
        setModal(false);
    };

    return (
        <BuilderContext.Provider value={value}>
            {modal && <ModalComponent onClick={handleClose} itemDrop={itemDrop} />}
            <div className="flex">
                <SideBar />

                <div className="w-[83.33333333%] px-3">
                    <div className=" pb-10" onDragOver={(e) => handleDaragOver(e)} onDrop={(e) => handleDrop(e)}>
                        {modal || (
                            <div className="w-full flex items-center justify-center p-4 text-[#055160] bg-[#cff4fc] rounded-lg border border-[#aaeefc] cursor-all-scroll">
                                <p className="text-4 ">Drag and Drop a form component</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-1">
                <Button className="h-[40px] my-[6px]">Save Form</Button>
                <p className=" text-[14px] text-[#0A3622] font-semibold rounded-md border border-[#a3cffb] bg-[#D1E7DD] px-2 py-1">
                    The output of the above Form Builder on save is a JSON Schema that represents the dynamic form
                </p>
                <p className="text-[24px] font-medium text-[#212529bf]">As JSON Schema</p>
                <span className="w-1/2 h-[66px] bg-[#ced4da] rounded-2xl border border-[#32b1af]"></span>
            </div>
        </BuilderContext.Provider>
    );
}

export default Builder;
