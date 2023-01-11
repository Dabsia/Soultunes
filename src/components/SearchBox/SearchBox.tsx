import React, {useState} from 'react'
import './SearchBox.css'
import { useAppDispatch } from '../../Redux/Store'
import { searchText } from '../../Redux/Actions'

const SearchBox:React.FC= ():JSX.Element => {

  const dispatch = useAppDispatch()

  const [searchTerm, setSearchTerm] = useState<string>('')

  const submitForm = (e: React.FormEvent) => {
      e.preventDefault()
    setSearchTerm('')
    dispatch(searchText(searchTerm))
  }


  return (
    <form onSubmit={submitForm} className='searchBoxParent'>
      <div className='searchBoxContainer'>
        <input placeholder='Search Music...' className='searchInput' onChange={e => setSearchTerm(e.currentTarget.value)} value = {searchTerm}  />
        <i className="ri-search-line searchIcon"></i>
      </div>
    </form>
  )
}

export default SearchBox
