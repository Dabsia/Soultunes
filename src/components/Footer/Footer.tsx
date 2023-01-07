import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footerText' >Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

        <div className='footer__Address'>
            <h3 className='footerAddress'>Address</h3>
            <p className='footerDesc'>There are many variations of passages of Lorem Ipsum available</p>
            <p className='emailAddress'>dabojohnson98@gmail.com</p>
      </div>
      <div>
        <Link className='footerLinks' to = '/'><i className="ri-whatsapp-fill whatsapp social-icons"></i></Link>
        <Link className='footerLinks' to = ''><i className="ri-github-fill github social-icons"></i></Link>
        <Link className='footerLinks' to = '/'><i className="ri-linkedin-box-fill linkedIn social-icons"></i></Link>
      </div>
    </div>
  )
}

export default Footer
