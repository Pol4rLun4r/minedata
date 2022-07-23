import React, { useEffect, useState } from 'react'
import '../styles/error.scss'
import iconFolder from '../assets/icons/icon-folder.png';
import { Link } from 'react-router-dom'
import { SquareLoader } from 'react-spinners'
import { ErrorTextTest, ErrorTxtTitle } from '../components/ErrorTexts';

export default function Error() {
    // define se vai aparecer um loading na tela ou não
    const [isLoading, setIsLoading] = useState(true);

    // faz o loading sumir após 2 segundos
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000)
    }, []);

    // faz toda a animação do scroll descer pra baixo sozinho
    useEffect(() => {
        setTimeout(() => {
            function scrolltoBottom() {
                let textWraper = document.getElementsByClassName('error_container')[0];
                textWraper.scrollTo(0, textWraper.scrollHeight);
            }
            let scrollAnimation = setInterval(() => {
                scrolltoBottom();
            }, 100)

            setTimeout(() => {
                clearInterval(scrollAnimation)
            }, 40000)
        }, 5000);
    }, [])


    return (
        <div className="container_cont-">
            <div className="window">
                <div className="header_window">
                    <div className="logo_window">
                        <img src={iconFolder} className='icon_folder' alt="icon_folder_window" />
                        <div className="title_window">
                            <Link to={'/'} className='titles_paths'>
                                ...\minecraft
                            </Link>
                            \error-
                        </div>
                    </div>
                </div>
                <div className='error_window'>
                    {isLoading ?
                        <div className='loading_container'>
                            <SquareLoader
                                color="#f4f2f2"
                                cssOverride={{}}
                                size={80}
                            />
                        </div> :
                        <div className='error_container'>
                            <div className='error' id='error'>
                                <ErrorTxtTitle />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}