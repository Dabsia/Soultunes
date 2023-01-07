import React from 'react'
import ReactDOM from 'react-dom'
import Backdrop from '../Backdrop/Backdrop'


const Overlay: React.FC = ():JSX.Element => {
  return (
    <>
        {
            ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop--root') as HTMLElement)    
          } 
    </>
  )
}

export default Overlay
