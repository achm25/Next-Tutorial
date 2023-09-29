'use client'
import styles from './post.module.scss'
import {Col,Row} from "react-bootstrap";

const Post = ({imgSrc, emojiCount = 0, commentsCount = 0,sharesCount = 0}) => {
    return (
       <div className={styles.postContainer}>
           <header>

           </header>
           <main>

           </main>
           <hr />
           <footer>
               <div>
                   {emojiCount} emojis
               </div>
               <div>
                   <span>{commentsCount} comments</span>
                   <span>{sharesCount} shares</span>
               </div>
           </footer>
       </div>
    );
};

export default Post;