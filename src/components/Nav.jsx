import React from 'react'
import logo from '../assets/icon.svg'
import img from '../assets/icon.svg'
const Nav = () => {
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Service", path: "features"},
        {link: "About", path: "about"},
        {link: "Product", path: "product"},
        {link: "Testimonial", path: "testimonial"},
        {link: "FAQ", path: "faq"},
      ]
  return (
    <nav className=' md:px-14 font-abc p-4 max-w-screen-2xl border- mx-auto '>
    <div className=" container mx-auto flex justify-between items-center font-medium">
      <div className="flex space-x-10 items-center text-grey">
          <a href="/" className='text-xl font-semibold flex items-center space-x-3 text-black '>
              <img src={logo} alt="" className='w-10 inline-block items-center'/>
              <span >AniWorld </span>
          </a>
          <ul className='md:flex space-x-8 hidden'>
            {
              navItems.map(({link,path}) => <a key={link} href={path} className='block text- hover:text-blue '>{link}
              </a>
              )
            }
          </ul>
      </div>
      

      <div className="space-x-12 hidden md:flex items-center ">
      
      <div>
        <input type="email" name='email' id='email' placeholder='Search'
        className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none'/>
        
      </div>
      <img src={img} alt="" className=" w-[5%] object-center " />
      <img src={img} alt="" className=" w-[5%] object-center " />
      
        <button className='bg-first text-dark py-2 px-3 transition-all duration-300 rounded hover:text-dark hover:bg-blue'>Upload</button>
      </div>
    </div>
  </nav>
  )
}

export default Nav
