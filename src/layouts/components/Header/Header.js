import HeaderItem from "./HeaderItem";

function Header() {
    return ( 
        <div>
            <div className="w-[100vw] bg-[#F8F9FA] flex p-3 items-center">
                <h1 className="text-[20px] font-medium mr-6">Dynamic Form Demo</h1>
    
                <div className="flex gap-4 transition-all">
                    <HeaderItem to={'/'} title={'Form Builder'} />
                    <HeaderItem to={'/renderer'} title={'Form Renderer'} />
                    <HeaderItem to={'/reader'} title={'Form Reader'} />
                    <HeaderItem to={'https://github.com/zealflowinc/frontend-dynamic-form-builder'} title={'GitHub'} />
                </div>
            </div>

            <div className="flex text-center justify-center my-2">
                <p className="text-[14px] text-[#0A3622] font-semibold rounded-md border border-[#a3cffb] bg-[#D1E7DD] px-2 py-1">Create a form here and save the form</p>
            </div>
        </div>
    );
}

export default Header;