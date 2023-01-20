import React, {useState, useEffect} from 'react'
import { closeModal, postMusicRequest } from '../../Redux/Actions'
import FancyButton from '../FancyButton/FancyButton'
import './Modal.css'
import { useAppDispatch, useAppSelector } from '../../Redux/Store'
import { State } from '../../Redux/Store'
import { RequestData } from '../../Redux/Actions'
import { TailSpin } from 'react-loading-icons'

const Modal: React.FC = (): JSX.Element => {

  const [err, setErr] = useState<string>('')

  const isLoading = useAppSelector((state: State) => state.data.isLoading)
  const postMsg = useAppSelector((state: State) => state.data.postMsg)
  const [genre, setGenre] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [number, setNumber] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const messageRequest: RequestData = {
    genre, name, number, message, email
  }

    const dispatch = useAppDispatch()

    const closeTheModal = () => {
        dispatch(closeModal())
    }

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    setErr('')
    if (genre.length === 0 || name.length === 0 || email.length === 0 || number.length === 0 || message.length === 0) {
      setErr('Please fill the form completely')
    }
    else {  
      dispatch(postMusicRequest(messageRequest))
      setErr(postMsg)
      setGenre('')
      setName('')
      setNumber('')
      setEmail('')
      setMessage('')
    }
  }

  useEffect(() => {
    setErr(postMsg)
  }, [setErr, postMsg])

  return (
    <div className='modal'>
        <div onClick={closeTheModal} className='cancelBox'>
            <i className="ri-close-line"></i>
        </div>
        <h1 className='modalHeader'>Soundtrack Request form</h1>
        <form onSubmit={submitForm}>
            <div className='inputFieldsBox'>
                  <div className='innerInputBox'>
                    <label htmlFor='genre'>Select Genre of soundtrack</label>
                    <input id = 'genre' type='text' className = 'inputField' onChange={e => setGenre(e.currentTarget.value) } value = {genre} />
                  </div> 
                  <div className='innerInputBox'>
                    <label htmlFor='name'>Your Name</label>
                    <input id = 'name' type='text' className = 'inputField' onChange={e => setName(e.currentTarget.value) } value = {name}  />
                  </div> 
              </div>    
              <div className='inputFieldsBox'>
                  <div className='innerInputBox'>
                    <label htmlFor='email'>Email Address</label>
                    <input id = 'email' type='email' className = 'inputField' onChange={e => setEmail(e.currentTarget.value) } value = {email} />
                  </div> 
                  <div className='innerInputBox'>
                    <label htmlFor='number'>Your Number</label>
                    <input id = 'number' type='number' className = 'inputField' onChange={e => setNumber(e.currentTarget.value) } value = {number} />
                  </div> 
              </div>    
              <div className='msgContainer'>
                  <label htmlFor='message'>Message</label>
                  <textarea id = 'message' onChange={e => setMessage(e.currentTarget.value) } value = {message} />
              </div>
              {!isLoading ? <div className='formBtnBox'>
                  <FancyButton text='Submit Request' color='#F45B49' textColor = '#fff' width='12.0625rem' height='3.25rem' borderColor = '#000' />
              </div>:
              <div className='loadingContainer'>
                <TailSpin stroke="#F45B49" />
          </div>}
      <p>{ err}</p>
        </form>
    </div>
  )
}

export default Modal
