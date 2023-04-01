import React, {useState} from "react";
import "./videoSidebar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLike] = useState(false)

    function handleLike(){
        //Sempre muda para o contrario do status, se for true coloca false, se for false coloca true
        setLike(!liked)
    }

    return (
        <div className='videoSideBar'>
            <div 
                className='videoSidebar__options'
                onClick={handleLike}
            >
                
                { liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large'/> }                
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='videoSidebar__options'>
                <ChatIcon fontSize='large'/>
                <p>{messages}</p>
            </div>
            <div className='videoSidebar__options'>
                <ShareIcon fontSize='large'/>
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar