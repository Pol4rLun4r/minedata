import React, { useState } from 'react'
import iconFolder from '../assets/icons/icon-folder.png';
import iconSavedRed from '../assets/icons/save-red.png'
import '../styles/addvideo.scss'
import { api } from '../services/api';
import { Link } from 'react-router-dom';

export default function AddFarm() {

  const [videoUrl, setVideoUrl] = useState('');
  async function handleform(event) {
    event.preventDefault();
    const videoId = videoUrl.includes("=") ? videoUrl.split("=")[1] : videoUrl.split("/")[3]
    await api.post("/api/addfarm", {
      videoId
    })
    setVideoUrl("");
  }

  return (
    <div className="container">
      <div className="window">
        <div className="header_window">
          <div className="logo_window">
            <img src={iconFolder} className='icon_folder' alt="icon_folder_window" />
            <div className="title_window">
              <Link to={'/'} className='titles_paths'>
                ...\minecraft
              </Link>
              <Link to={'/minefarms'} className='titles_paths'>
                \Minefarms
              </Link>
              \Addfarm</div>
          </div>
        </div>
        <div className='addvideo_desc_window'>
          <div className='descri'>
            to add a farm copy and paste the youtube link in the field below, it works with desktop and mobile links
          </div>
        </div>
        <div className='line_window' />
        <div className='add_window'>
          <form className='addvideo_container_form'>
            <div className='addvideo_form_title'>Add your Link here</div>
            <input onChange={event => setVideoUrl(event.target.value)} value={videoUrl} name="url" placeholder='example: https://www.youtube.com/watch?v="idVideo"' required minLength={5} className='addvideo_form' />
            <button onClick={handleform} className='addvideo_btn_save_style'>
              <img src={iconSavedRed} className="addvideo_img_save_style" alt="saved" />
              <div>Save</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}