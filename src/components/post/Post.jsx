'use client'
import dynamic from 'next/dynamic'
import styles from './post.module.scss'
import Divider from "@/components/divider";
import SContainer from "@/components/s-container";

const ProfileItem = dynamic(() => import("@/components/profile-item"), { ssr: false })

const Post = ({imageContent,textContent,linkContent, emojiCount = 0, commentsCount = 0,sharesCount = 0,}) => {

    const actionDetail = {
        type: 'replied to the topic',
        title: 'Welcome to ',
        place_type: 'in the forum',
        place_title: 'Cosplayers Group Forum',
    }

    return (
        <SContainer noPadding={true}>
            <div className={styles.postContainer}>
                <header>
                    <ProfileItem actionDetail={actionDetail} imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' cardSize='xs' title='test' description='1 year ago' tagTitle='Pro Member' isVerified={true}/>
                </header>
                <main>
                    {textContent && <p>{textContent}</p>}
                    {linkContent && <a href={linkContent} > {linkContent}</a> }
                    {imageContent && <img src={imageContent}/>}
                </main>
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