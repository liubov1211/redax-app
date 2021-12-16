import React from 'react'
import styles from './Style.module.css';

const PostItem = ({ name, nickname, content, date, comment, likes, image, avatar }) => {

    return (
        <div className={styles.Appheader}>
            <img src={avatar} className={styles.applogo} alt="" />
            <div className={styles.Appblock}>
                <h4>{name}</h4>
                <span>{nickname}</span>
                <span> {date}</span>
                <p>{content}</p>
                <img className={ styles.ImageWomen } src={image} alt="" />
                <div className={styles.blokBot}>
                    <h5>📝 {comment}</h5>
                    <h5>🤍 {likes} </h5>
                    <h5>🔄 </h5>
                    <h5>⬇️ </h5>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
