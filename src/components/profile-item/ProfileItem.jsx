'use client'
import styles from './profile-item.module.scss'
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import ProfileImage from "@/components/profile-image";

const ProfileItem = ({imgSrc, title, description, iconSrc}) => {
    return (
        <div className={styles.profileItemContainer}>
            <div className={styles.image}>
                <ProfileImage imgSrc={imgSrc} />
            </div>
            <div className={styles.detail}>
                <p className={styles.title}>
                    {title}
                </p>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
            {
                iconSrc && <div className={styles.icon}>
                    <Image
                        width={20}
                        height={20}
                        className="object-fit-cover"
                        src={iconSrc}
                    />
                </div>
            }
        </div>
        // <div className={styles.profileItemContainer}>
        //     <div className={styles.image}>
        //
        //     </div>
        //     <div className={styles.name}>
        //
        //     </div>
        //     {
        //         iconSrc && <div className={styles.icon}>
        //
        //         </div>
        //     }
        // </div>
    );
};

export default ProfileItem;