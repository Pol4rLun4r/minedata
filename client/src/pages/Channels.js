import React, { useEffect, useState } from 'react'
import '../styles/channels.scss'
import iconFolder from '../assets/icons/icon-folder.png';
import iconAddChannel from '../assets/icons/save-yellow.png'
import axios from 'axios';
import { api } from '../services/api';
import { Link } from 'react-router-dom'
import { SquareLoader } from 'react-spinners'

export default function Channels() {

  const [error, setError] = useState(null);
  const [channels, setChannels] = useState([]);

  // usa a api pra pegar as construções no banco
  useEffect(() => {
    api.get("/api/getchannels")
      .then((response) => {
        getYoutubeChannnelInfo(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
  }, [])

  // usa a api do youtube pra pegar as informações dos vidoes e juntar com a do banco
  async function getYoutubeChannnelInfo(channelIds) {
    channelIds.forEach(async channel => {
      const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${channel.channelId}&part=snippet&key=${process.env.REACT_APP_API_KEY}`)

      const newChannel = {
        ...data,
        channelId: channel.channelId
      }

      setChannels(prevState => [...prevState, newChannel])

    });
  }

  // função simples para deleter um video do banco
  function deleteVideo(videoId) {
    api.delete(`/api/deletechannel/${videoId}`)

    // função temporaria de update
    window.location.reload(true)
  }

  // define se vai aparecer um loading na tela ou não
  const [isLoading, setIsLoading] = useState(true);

  // faz o loading sumir após 2 segundos
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
              \channels
            </div>
          </div>
        </div>
        <div className='channels_window'>
          <div className='container_channels'>
            <div className='container_addchannel_save'>
              <Link to={'/channels/addchannel'} className='addchannel_link'>
                <img src={iconAddChannel} alt='add build' className='img_saved_link' />
                <div className='title_saved_link'>Add channel</div>
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
              <div className='channels'>
                {error && (
                  <div className='channels_videos_alert'>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                {channels && channels.map((channel, index) => {
                  return (
                    <>
                      <div className='container_channel'>
                        <a key={index + "video"} href={`https://www.youtube.com/channel/${channel.channelId}`} target="_blank" className='channel'>
                          <div className='img_and_desc_card'>
                            <img src={channel.items[0].snippet.thumbnails.medium.url} alt={"a"} className="img_channel" />
                            <div className='desc_channel'>
                              {/* {channel.items[0].snippet.description} */}
                              </div>
                          </div>
                          <div className='title_channel'>{channel.items[0].snippet.title}</div>
                        </a>
                        <div className='container_c_buttons'>
                          <button className='delete_channel' onClick={() => { deleteVideo(channel.channelId) }}>delete</button>
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