import InputConfig from '../Input/InputConfig';
import SelectConfig from '../Select/SelectConfig';
import modalDisplay from '../../datas/modalDisplay';
import { Checkbox } from 'antd';

function ModalDisplay({ itemDrop }) {
    return (
        <div className="flex flex-col gap-5">
            {modalDisplay.map((dataItem, index) => {
                if (itemDrop.display) {
                    if (itemDrop.display.includes(dataItem.id)) {
                        if (dataItem.type === 'input') {
                            if (dataItem.id === 1) dataItem.value = itemDrop.title;

                            return (
                                <InputConfig
                                    key={dataItem.id}
                                    id={dataItem.id}
                                    value={dataItem.value}
                                    title={dataItem.title}
                                    placeholder={dataItem.placeholder}
                                />
                            );
                        } else if (dataItem.type === 'select') {
                            return <SelectConfig key={dataItem.id} title={dataItem.title} options={dataItem.options} />;
                        } else if (dataItem.type === 'checkbox') {
                            return <Checkbox key={dataItem.id}>{dataItem.title}</Checkbox>;
                        }
                    }
                }
                return '';
            })}
        </div>
    );
}

export default ModalDisplay;
