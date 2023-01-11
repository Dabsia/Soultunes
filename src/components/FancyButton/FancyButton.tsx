import React from 'react'
import './FancyButton.css'


export interface buttonTypes{
  text: string;
  color: string;
  width: string;
  height: string;
  textColor: string;
  borderColor: string;
  // redirectToRequest(): React.MouseEventHandler<HTMLButtonElement> | undefined
}

const FancyButton:React.FC<buttonTypes> = ({text, color, height, textColor ,borderColor, width}):JSX.Element => {
  return (
    <div style={{width: width, height :height, border: ` 1px solid ${borderColor}`}} className='fancyBtnContainer'>
      <button  style={{backgroundColor: color, color: textColor, width: width, height :height}} className='fancyButton'>{text}</button>
    </div>
  )
}

export default FancyButton
