import React from "react";

const PostItem = ({ name, nickname, content, dateNow, com, like, imageBig, photo }) => {
    return (
        <div className="App-header">
            <img src={photo} className="App-logo" alt="logo" />
            <div className="App-block">
                <h4> {name} </h4>
                <img src={imageBig} />
                <span>{nickname}</span>
                <span> {dateNow}</span>
                <p>{content}</p>
                <img src={imageBig} className="ImageWomen" />
                <div className="blokBot">
                    <h5>📝 {com}</h5>
                    <h5>🤍 {like} </h5>
                    <h5>🔄 </h5>
                    <h5>⬇️ </h5>
                </div>
            </div>
        </div>
        
    )
}

export default PostItem;