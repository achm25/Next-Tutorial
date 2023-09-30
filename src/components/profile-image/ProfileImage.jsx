'use client'
import styles from './profile-image.module.scss'

const ProfileImage = ({imgSrc}) => {

    return (
        <div className={styles.profileImageContainer}>
            <img src={imgSrc} />
        </div>
    );
};

export default ProfileImage;