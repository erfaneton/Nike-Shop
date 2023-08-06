import React from 'react'
import './Footer.css'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { AiOutlinePlayCircle, AiOutlineYoutube } from 'react-icons/ai'
export default function Footer() {
    return (
        <div className='Container'>
            <div className="SocialIcons">
                <BsGithub className='Icons' />
                <BsInstagram className='Icons' />
                <BsTwitter className='Icons' />
                <AiOutlineYoutube className='Icons' />
            </div>
            <div className="Watch">
                <AiOutlinePlayCircle className='Icons' />
                <span style={{ cursor: "pointer" }}> whatch video </span >
            </div>
            <div className="Number">
                <h3>01</h3>
                <span>/03</span>
            </div>
        </div>
    )
}
