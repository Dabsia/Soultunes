import React from 'react'
import { closeModal } from '../../Redux/Actions'
import FancyButton from '../FancyButton/FancyButton'
import './Modal.css'
import { useAppDispatch } from '../../Redux/Store'

const Modal:React.FC = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const closeTheModal = () => {
        dispatch(closeModal())
        
    }

  return (
    <div className='modal'>
        <div onClick={closeTheModal} className='cancelBox'>
            <i className="ri-close-line"></i>
        </div>
        <h1 className='modalHeader'>Soundtrack Request form</h1>
        <form>
            <div className='inputFieldsBox'>
                  <div className='innerInputBox'>
                    <label htmlFor='genre'>Select Genre of soundtrack</label>
                    <input id = 'genre' type='text' className = 'inputField'  />
                  </div> 
                  <div className='innerInputBox'>
                    <label htmlFor='name'>Your Name</label>
                    <input id = 'name' type='text' className = 'inputField'  />
                  </div> 
              </div>    
              <div className='inputFieldsBox'>
                  <div className='innerInputBox'>
                    <label htmlFor='email'>Email Address</label>
                    <input id = 'email' type='email' className = 'inputField'  />
                  </div> 
                  <div className='innerInputBox'>
                    <label htmlFor='number'>Your Number</label>
                    <input id = 'number' type='number' className = 'inputField'  />
                  </div> 
              </div>    
              <div className='msgContainer'>
                  <label htmlFor='message'>Message</label>
                  <textarea id = 'message' />
              </div>
              <div className='formBtnBox'>
                  <FancyButton text='Submit Request' color='#F45B49' textColor = '#fff' width='12.0625rem' height='3.25rem' borderColor = '#000' />
              </div>
        </form>
    </div>
  )
}

export default Modal
