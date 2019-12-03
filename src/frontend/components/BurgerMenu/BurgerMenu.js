import React, {useState} from "react";
import Toolbar from "../Toolbar/Toolbar.js"
import SideDrawer from "../Sidedrawer/Sidedrawer"
import Backdrop from './components/Backdrop/Backdrop.js'

function BurgerMenu() {

  const [sideDrawerOpen, setSideDraw] = useState(false)
  const drawerToggleClickHandler = () => {
    setSideDraw(!sideDrawerOpen);
    }
  const backdropClickHandler = () => {
    setSideDraw(false);
  }    

  return (
    <div className='burger_menu'>
      <Toolbar drawerClickHandler={() => drawerToggleClickHandler()} />
      <SideDrawer show={() => sideDrawerOpen()}/>
      {sideDrawerOpen ? <Backdrop click={() => backdropClickHandler()}/> : <></>}
    </div>
    );
}

export default BurgerMenu;