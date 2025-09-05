import React from 'react'
import Drawer from 'react-modern-drawer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import Link from 'next/link';
const NavDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  return (
    <>
    <button onClick={toggleDrawer}><FontAwesomeIcon icon={faBars} color='black' size='xl' />
    </button>
    <Drawer
    style={{backgroundColor: 'var( --primary)'}}
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bla bla bla'
    >
        <div className=''>
         <h2 className='m-5 text-[25px]'>S.H.R.M</h2>
            <ul className='m-5 '>
                <li className='hover:underline mb-3'><Link href="/">Home</Link></li>
                <li className='hover:underline mb-3'><Link href="/about">About</Link></li>
                <li className='hover:underline mb-3'><Link href="/service">Services</Link></li>
                <li className='hover:underline mb-3'><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </Drawer>
</>
  )
}

export default NavDrawer







