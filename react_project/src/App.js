import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg" > {/* dark mode backgroundColor */}
        <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}> {/* zindex to make ir aapper above the other elements*/}
          <TooltipComponent content="Settings" position="Top">
            <button type="button" className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray" style={{background: 'DarkCyan', borderRadius: '50%'}}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            SIDEBAR
            </div>
        ): (
          <div className='w-0 dark:bg-secondary-dark-bg'>

            nao
          </div>

        )} 
        <div className= { 
          `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? ' md:ml-72' : 'flex-2 '} `
          
        }>
        
        </div>
        <div className= "fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
          Navbar
        </div>
        <div>
          <Routes>
            {/* dashboard */}
            <Route path="/dashboard" element="Dashboard" />
            <Route path="/" element="Ecommerce" />

            {/* Pages */}
            <Route path="/customers" element="Customers" />
            <Route path="/orders" element="Orders" />
            <Route path="/employees" element="Employees" />

            {/* Apps */}
            <Route path="/kanban" element="Kanban" />
            <Route path="/editor" element="Editor" />
            <Route path="/calender" element="Calender" />
            <Route path="/color-picker" element="Color-picker" />
            
            {/* Charts */}
            <Route path="/line" element="Line" />
            <Route path="/area" element="Area" />
            <Route path="/bar" element="Bar" />
            <Route path="/pie" element="Pie" />
            <Route path="/financial" element="Financial" />
            <Route path="/color-mapping" element="Color-mapping" />
            <Route path="/pyramid" element="Pyramid" />
            <Route path="/stacked" element="Stacked" />

          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App


// The Tooltip component displays a pop-up containing an information or a message when you hover, click, focus, or touch an element. 
// The information displayed in the Tooltip can include simple text, 
// images, hyperlinks, or custom templates. In mobile devices, to display the Tooltip, you need to tap and hold the target elements.