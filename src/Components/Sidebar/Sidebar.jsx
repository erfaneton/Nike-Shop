import React from 'react'
import { useContext, useState } from "react";
import CategoryContext from "../../Context/shoeContext.jsx";
import { Offcanvas } from 'react-bootstrap';
import './Sidebar.css';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { MdLogout } from 'react-icons/md'
export default function Sidebar() {


    const shoesDataTransfer = useContext(CategoryContext);


    const handleClose = () => shoesDataTransfer.setShow(false);

    return (
        <div>
            <Offcanvas show={() => shoesDataTransfer.show} onHide={handleClose} placement='end' >
                <Offcanvas.Header closeButton >

                    <Offcanvas.Title bsPrefix='title-container'>
                        <div className="title-head">
                            <div className='container-img'>  <img src="/Img/me.jpg" alt="" className='user-img' /> </div>
                            <h5>erfaneton</h5>
                        </div>
                        <div className='email-h6'><h6>erfanshafiei.ea@gmail.com</h6></div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div className='sidebar-item'>
                        <AiOutlineUser className='sidebar-icon'></AiOutlineUser>
                        <div className='name-sidebar-item'>
                            My Account
                        </div>
                    </div>
                    <div className='sidebar-item'>
                        <BsBag className='sidebar-icon'></BsBag>
                        <div className='name-sidebar-item'>
                            My Orders
                        </div>
                    </div>
                    <div className='sidebar-item'>
                        <BiSupport className='sidebar-icon'></BiSupport>
                        <div className='name-sidebar-item'>
                            Support
                        </div>
                    </div>
                    <div className='sidebar-item'><GrLocation className='sidebar-icon'></GrLocation>
                        <div className='name-sidebar-item'>
                            Location
                        </div>
                    </div>
                    <div className='sidebar-item'><MdLogout className='sidebar-icon'></MdLogout>
                        <div className='name-sidebar-item' >
                            Logout
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
