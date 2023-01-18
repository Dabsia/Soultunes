import React from 'react'
import './FancyButton.css'
import { useAppDispatch } from '../../Redux/Store';
import { openModal } from '../../Redux/Actions'

export interface buttonTypes{
  text: string;
  color: string;
  width: string;
  height: string;
  textColor: string;
  borderColor: string;
  // redirectToRequest(): React.MouseEventHandler<HTMLButtonElement> | undefined
}

const FancyButton: React.FC<buttonTypes> = ({ text, color, height, textColor, borderColor, width }): JSX.Element => {
  
   const dispatch = useAppDispatch();

  const showModal = () => {
    dispatch(openModal())
  }

  return (
    <div style={{width: width, height :height, border: ` 1px solid ${borderColor}`}} className='fancyBtnContainer'>
      <button onClick={showModal} style={{backgroundColor: color, color: textColor, width: width, height :height}} className='fancyButton'>{text}</button>
    </div>
  )
}

export default FancyButton
