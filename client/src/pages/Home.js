import React from 'react';
import '../styles/home.scss';
import pngFolder from '../assets/icons/folder.png';
import iconFolder from '../assets/icons/icon-folder.png';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
      <div className='window'>
        <div className='header_window'>
          <div className='logo_window'>
            <img src={iconFolder} className='icon_folder' alt='icon_folder_window' />
            <div className='title_window'>...\minecraft\</div>
          </div>
        </div>
        <div className='descri_window'>
          <div className='descri'>
          welcome to minedata, here is a repository where you can save builds, farms and channels
          </div>
        </div>
        <div className='line_window' />
        <div className='main_window'>
          <div className='container_folders'>
            <div className='folders'>
              <Link to={'/minebuilds'} className="a_folder" >
                <img src={pngFolder} alt="folder_mine_builders" className='folder' />
                <div className='folder_title'>MineBuilds</div>
              </Link>
              <Link to={'/minefarms'} className="a_folder" >
                <img src={pngFolder} alt="folder_mine_builders" className='folder' />
                <div className='folder_title'>MineFarms</div>
              </Link>
              <Link to={'/channels'} className="a_folder" >
                <img src={pngFolder} alt="folder_mine_builders" className='folder' />
                <div className='folder_title'>Channels</div>
              </Link>
              <Link to={'/error'} className="a_folder" >
                <img src={pngFolder} alt="folder_mine_builders" className='folder' />
                <div className='folder_title'>Error-</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}