import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';



const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className=' ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto
    pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={() => {}} className="items-center gap-3 ml-3 mt-4 flex dark:text-white text-slate-900">
            <SiShopware /> <span>shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => {}} className="text-x1 rounded-full p-3 hover:bg-light-gray mt-4 block">   {/* md:hidden */}
            
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        
        
      </>)}
    
      
    </div>
  )
}

export default Sidebar
