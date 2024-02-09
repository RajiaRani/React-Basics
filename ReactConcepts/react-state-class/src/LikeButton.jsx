import { useState } from "react"

export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [countLike, setCountLike] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setCountLike(countLike+1);
        console.log(isLiked)
    }
    let likeStyle = {color:"red"};


    return (
        <div>
        <p>Likes = {countLike}</p>
         <p onClick={toggleLike}>
            {isLiked ? (<i className="fa-solid fa-heart" style={likeStyle}></i>) :
            (<i className="fa-regular fa-heart"></i>)}
         </p>
        </div>
    )
}