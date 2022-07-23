import React, { useEffect, useState } from 'react'
import '../styles/minevideos.scss'
import iconFolder from '../assets/icons/icon-folder.png';
import iconAddVideo from '../assets/icons/save-yellow.png'
import axios from 'axios';
import { api } from '../services/api';
import { Link } from 'react-router-dom'
import { SquareLoader } from 'react-spinners'

export default function MineFarms() {

  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);

  // usa a api pra pegar as construções no banco
  useEffect(() => {
    api.get("/api/getfarms")
      .then((response) => {
        getYoutubeVideoInfo(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
  }, [])

  // usa a api do youtube pra pegar as informações dos vidoes e juntar com a do banco
  async function getYoutubeVideoInfo(videoIds) {
    videoIds.forEach(async video => {
      const { data } = await axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${video.videoId}`)

      const newVideo = {
        ...data,
        videoId: video.videoId
      }

      setVideos(prevState => [...prevState, newVideo])

    });
  }

  // função simples para deleter um video do banco
  function deleteVideo(videoId) {
    api.delete(`/api/deletefarm/${videoId}`)

    // função temporaria de update
    window.location.reload(true)
  }

  // define se vai aparecer um loading na tela ou não
  const [isLoading, setIsLoading] = useState(true);

  // faz o loading sumir após 1 segundo
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }, []);

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
              \minefarms
            </div>
          </div>
        </div>
        <div className='videos_window'>
          <div className='container_videos'>
            <div className='container_addvideo_save'>
              <Link to={'/minefarms/addfarm'} className='addvideo_link'>
                <img src={iconAddVideo} alt='add build' className='img_saved_link' />
                <div className='title_saved_link'>Add Farm</div>
              </Link>
            </div>

            {isLoading ?
              <div className='loading_container'>
                <SquareLoader
                  color="#f4f2f2"
                  cssOverride={{}}
                  size={80}
                />
              </div> :
              <div className='videos'>
                {error && (
                  <div className='minevideos_videos_alert'>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {videos && videos.map((video, index) => {
                  return (
                    <>
                      <div className='container_video'>
                        <a key={index} href={video.url} target="_blank" className='video'>
                          <img src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} alt={video.title} className="img_videos" />
                          <div className='title_video'>{video.title}</div>
                        </a>
                        <div className='container_buttons'>
                          <a key={index + "donwload"} href={`https://www.ssyoutube.com/watch?v=${video.videoId}`} target="_blank" className='donwload_video'>
                            <div>Donwload</div>
                          </a>
                          <button className='delete_video' onClick={() => { deleteVideo(video.videoId) }}>delete</button>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}