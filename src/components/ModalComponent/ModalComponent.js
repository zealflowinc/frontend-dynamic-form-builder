import { useState } from 'react';
import ModalDisplay from './ModalDisplay';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalPreview from './ModalPreview';
import { CloseOutlined } from '@ant-design/icons';

function ModalComponent({ onClick, itemDrop }) {
    const [modalPreview, setModalPreview] = useState(true)

    const handleClick = (e) => {
        e.stopPropagation();
    };

    const propsFooter = {
        modalPreview,
        setModalPreview,
        onClickCancel: onClick
    }

    return (
        <div
            className="w-[100vw] h-[100vh] bg-blurred4 fixed top-0 left-0 z-50 flex items-start justify-center cursor-pointer py-[20px] px-[60px]"
            onClick={onClick}
        >
            <div
                className="w-[86%] max-h-full rounded-lg shadow-lg cursor-default bg-[#f0f0f0] p-5 overflow-y-scroll relative"
                onClick={(e) => handleClick(e)}
            >
                <div onClick={onClick} className='p-1 absolute right-[8px] top-[6px] cursor-pointer'><CloseOutlined /></div>
                <div className="flex justify-between">
                    <h1 className="text-[20px] text-[#666666] mb-4">{itemDrop.title} Component</h1>
                    <p className="mt-4 mr-4 text-[14px] font-normal text-[#0d6efd] underline cursor-pointer">Help</p>
                </div>
                <div className={`${modalPreview && 'flex gap-4'}`}>
                    <div className="flex-1 border border-[#bebebe] rounded-lg overflow-hidden shadow-md">
                        <ModalHeader />

                        <div className="bg-white p-4 rou">
                            <ModalDisplay itemDrop={itemDrop} />
                        </div>
                    </div>

                    <div className="flex-1">
                        {modalPreview && <ModalPreview />}

                        <ModalFooter propsFooter={propsFooter} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalComponent;
