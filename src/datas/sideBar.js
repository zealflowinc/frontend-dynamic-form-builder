import {
    AppstoreOutlined,
    BarsOutlined,
    CalendarOutlined,
    CheckSquareOutlined,
    ChromeOutlined,
    ClockCircleOutlined,
    ColumnWidthOutlined,
    CopyOutlined,
    DiffOutlined,
    FontColorsOutlined,
    FunnelPlotOutlined,
    GlobalOutlined,
    GroupOutlined,
    HighlightOutlined,
    Html5Outlined,
    IeOutlined,
    InsertRowAboveOutlined,
    LaptopOutlined,
    LayoutOutlined,
    MenuOutlined,
    PauseOutlined,
    PayCircleOutlined,
    PlusSquareOutlined,
    PoweroffOutlined,
    QrcodeOutlined,
    RobotOutlined,
    SaveOutlined,
    SwapOutlined,
    TranslationOutlined,
    UnderlineOutlined,
    UngroupOutlined,
    WhatsAppOutlined,
} from '@ant-design/icons';

const sideBars = [
    {
        title: 'Basic',
        props: [
            {
                icon: <SwapOutlined />,
                display: [1, 8, 20, , 39, 40, 53, 54, 55, 56, 57, 58, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
                title: 'Text Field',
            },
            {
                icon: <FontColorsOutlined />,
                display: [1, 8, 25, 26, 39, 40, 53, 54, 57, 58, 59, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
                title: 'Text Area',
            },
            {
                icon: <PauseOutlined />,
                display: [1, 8, 20, 25, 39, 40, 53, 54, 57, 58, 64, 65, 66, 67, 70, 71, 72, 73, 74],
                title: 'Number',
            },
            { icon: <CheckSquareOutlined />, display: [1, 25, 38, 39, 40, 64, 66, 67, 72, 73, 74], title: 'Checkbox' },
            {
                icon: <PlusSquareOutlined />,
                display: [1, 8, 18, 25, 39, 40, 64, 66, 67, 71, 72, 73, 74],
                title: 'Select Boxes',
            },
            {
                icon: <BarsOutlined />,
                display: [1, 8, 19, 20, 25, 39, 40, 64, 66, 67, 71, 72, 73, 74],
                title: 'Select',
            },
            {
                icon: <ChromeOutlined />,
                display: [1, 8, 19, 20, 25, 39, 40, 64, 66, 67, 71, 72, 73, 74],
                title: 'Radio',
            },
            {
                icon: <SaveOutlined />,
                display: [1, 25, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 64, 66, 67, 73, 74],
                title: 'Submit Button',
            },
            {
                icon: <ColumnWidthOutlined />,
                display: [1, 25, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 64, 66, 67, 71, 73, 74],
                title: 'Reset Button',
            },
            {
                icon: <PoweroffOutlined />,
                display: [1, 25, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 64, 66, 67, 71, 73, 74],
                title: 'Button',
            },
        ],
    },
    {
        title: 'Advanced',
        props: [
            {
                icon: <IeOutlined />,
                display: [1, 8, 20, 25, 39, 40, 53, 54.57, 58, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
                title: 'Email',
            },
            {
                icon: <UnderlineOutlined />,
                display: [1, 8, 20, 25, 39, 40, 53, 54.57, 58, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
                title: 'Url',
            },
            {
                icon: <WhatsAppOutlined />,
                display: [1, 8, 20, 25, 39, 40, 53, 54.57, 58, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
                title: 'Phone Number',
            },
            { icon: <CopyOutlined />, display: [1, 8, 20, 25, 39, 40, 64, 66, 67, 71, 73, 74], title: 'Tags' },
            {
                icon: <CalendarOutlined />,
                display: [1, 8, 14, 15, 16, 20, 25, 39, 40, 64, 66, 67, 71, 73, 74],
                title: 'Date / Time',
            },
            {
                icon: <CalendarOutlined />,
                display: [1, 8, 12, 13, 15, 25, 39, 40, 64, 66, 67, 71, 73, 74],
                title: 'Day',
            },
            { icon: <ClockCircleOutlined />, display: [1, 8, 11, 25, 39, 40, 64, 66, 67, 71, 73, 74], title: 'Time' },
            {
                icon: <PayCircleOutlined />,
                display: [1, 8, 20, 25, 39, 40, 53, 54, 57, 58, 64, 65, 66, 67, 71, 72, 73, 74],
                title: 'Currency',
            },
            { icon: <MenuOutlined />, display: [1, 8, 25, 39, 40, 64, 66, 67, 71, 72, 73, 74], title: 'Survey' },
            {
                icon: <HighlightOutlined />,
                display: [1, 7, 8, 9, 10, 25, 39, 40, 64, 66, 67, 73, 74],
                title: 'Signature',
            },
        ],
    },
    {
        title: 'Layout',
        props: [
            { icon: <DiffOutlined />, display: [1, 2, 3, 4, 5, 6, 25, 66, 74], title: 'HTML Element' },
            { icon: <Html5Outlined />, display: [1, 25, 66, 67, 74], title: 'Content' },
            { icon: <LayoutOutlined />, display: [1, 25, 27, 28, 66, 67, 74], title: 'Columns' },
            { icon: <AppstoreOutlined />, display: [1, 25, 40, 64, 66, 73, 74], title: 'Field Set' },
            { icon: <FunnelPlotOutlined />, display: [1, 25, 33, 40, 66, 73, 74], title: 'Panel' },
            { icon: <InsertRowAboveOutlined />, display: [1, 21, 22, 23, 24, 25, 66, 67, 73, 74], title: 'Table' },
            { icon: <LaptopOutlined />, display: [1, 25, 60, 66, 73, 74], title: 'Tabs' },
            { icon: <GroupOutlined />, display: [1, 25, 66, 73, 74], title: 'Well' },
        ],
    },
    {
        title: 'Data',
        props: [
            { icon: <TranslationOutlined />, display: [1, 25, 74], title: 'Hidden' },
            { icon: <UngroupOutlined />, display: [1, 8, 25, 40, 66, 67, 73, 74], title: 'Container' },
            { icon: <GlobalOutlined />, display: [1, 8, 25, 39, 40, 41, 42, 47, 52, 66, 67, 72, 73, 74], title: 'Data Map' },
            {
                icon: <QrcodeOutlined />,
                display: [1, 8, 25, 39, 40, 41, 45, 46, 47, 48, 49, 50, 51, 52, 64, 66, 67, 73, 74],
                title: 'Data Grid',
            },
            { icon: <RobotOutlined />, display: [1, 8, 25, 39, 40, 64, 66, 67, 73, 74], title: 'Edit Grid' },
        ],
    },
];

export default sideBars;
