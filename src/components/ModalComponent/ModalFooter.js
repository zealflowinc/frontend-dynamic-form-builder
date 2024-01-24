function ModalFooter({ propsFooter }) {
    const buttons = [
        {
            bgColor: '#198754',
            name: 'Save',
            onClick: () => {
                console.log('save');
            },
        },
        {
            bgColor: '#6c757d',
            name: 'Cancel',
            onClick: propsFooter.onClickCancel,
        },
        {
            bgColor: '#dc3545',
            name: 'Remove',
            onClick: () => {
                propsFooter.onClickCancel();
            },
        },
        {
            bgColor: '#0d6efd',
            name: `${propsFooter.modalPreview ? 'Hide' : 'Show'} preview`,
            onClick: () => {
                propsFooter.setModalPreview(!propsFooter.modalPreview);
            },
        },
    ];

    return (
        <div className="mt-4">
            {buttons.map((buttonItem, index) => (
                <button
                    key={index}
                    onClick={buttonItem.onClick}
                    className={`text-white py-2 px-4 rounded-lg font-medium tetx-[28px] mr-2 bg-[${buttonItem.bgColor}] transition-all hover:scale-105 active:scale-100`}
                >
                    {buttonItem.name}
                </button>
            ))}
        </div>
    );
}

export default ModalFooter;
