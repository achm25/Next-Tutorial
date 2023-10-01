'use client'
import React from 'react';
import styles from './profile-item.module.scss'
import Image from "next/image";
import ProfileImage from "@/components/profile-image";
import Tag from "./tag";
import { MdVerified } from "react-icons/md";
import useResponsive from "@/hooks/useResponsive";

const sizes = {
    'md': 'md',
    'xs': 'xs',
}

const ProfileItem = ({imgSrc, title, description,isVerified, iconSrc,tagTitle ,cardSize=sizes.md, actionDetail}) => {

    const { isDesktop } = useResponsive();

    const NotDesktopSizeTitleDetail = () => {
        return <>
            <p className={styles.title}>
                <p>{title}</p>
                {isVerified && <MdVerified color='blue'/>}
                {tagTitle && <Tag title={tagTitle} />}
            </p>
            {actionDetail &&  <div>
                <span>{actionDetail.type} </span>
                <b>{actionDetail.title}</b>
                <span>{actionDetail.place_type} </span>
                <b>{actionDetail.place_title}</b>
            </div>}

        </>
    }

    const TitleDetail = () => {
        if(isDesktop) {
            return  <>
                <div className={styles.title}>
                    <p> {title}</p>
                    {isVerified && <MdVerified color='blue'/>}
                    {tagTitle && <Tag title={tagTitle} />}
                    {
                        actionDetail &&
                        <>
                            <span>{actionDetail.type} </span>
                            <b>{actionDetail.title} </b>
                        </>
                    }
                </div>
                {
                    actionDetail &&
                    <div>
                        <span>{actionDetail.place_type} </span>
                        <b>{actionDetail.place_title} </b>
                    </div>
                }
            </>
        }else {
            return <NotDesktopSizeTitleDetail />
        }
    }


    return (
        <div className={`${styles.profileItemContainer} ${styles[sizes[cardSize]]}`}>
            <div className={styles.image}>
                <ProfileImage imgSrc={imgSrc}  />
            </div>
            <div className={styles.detail}>
                <TitleDetail />
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
    );
};

export default ProfileItem;