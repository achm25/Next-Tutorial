
'use client'
import dynamic from 'next/dynamic'
import styles from './post.module.scss'
import Divider from "@/components/divider";
import SContainer from "@/components/s-container";

const ProfileItem = dynamic(() => import("@/components/profile-item"), { ssr: false })

const Post = ({imageContent,textContent,linkContent, actionDetail, profile , emojiCount = 0, commentsCount = 0,sharesCount = 0,}) => {

    return (
        <SContainer noPadding={true}>
            <div className={styles.postContainer}>
                <header>
                    <ProfileItem actionDetail={actionDetail} {...profile}/>
                </header>
                <section>
                    {textContent && <p>{textContent}</p>}
                    {linkContent && <a href={linkContent} > {linkContent}</a> }
                    {imageContent && <img src={imageContent}/>}
                </section>
                <Divider />
                <footer>
                    <div className={styles.emoji}>
                        😃 {emojiCount}
                    </div>
                    <div>
                        <span>{commentsCount} comments</span>
                        <span>{sharesCount} shares</span>
                    </div>
                </footer>
            </div>
        </SContainer>
    );
};

export default Post;