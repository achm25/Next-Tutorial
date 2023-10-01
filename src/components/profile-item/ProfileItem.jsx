'use client'
import styles from './profile-item.module.scss'
import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import ProfileImage from "@/components/profile-image";
import Tag from "./tag";
import { MdVerified } from "react-icons/md";
import MobileBreakpoint from "@/utils/responsive/mobile_breakpoint";
import TabletBreakpoint from "@/utils/responsive/tablet_breakpoint";
import DesktopBreakpoint from "@/utils/responsive/desktop_breakpoint";

const sizes = {
    'md': 'md',
    'xs': 'xs',
}

const ProfileItem = ({imgSrc, title, description,isVerified, iconSrc,tagTitle ,cardSize=sizes.md, actionDetail}) => {

    const NotDesktopSizeTitleDetail = () => {
        return <>
            <p className={styles.title}>
                {title}
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
        return <>
            <DesktopBreakpoint>
                <p className={styles.title}>
                    {title}
                    {isVerified && <MdVerified color='blue'/>}
                    {tagTitle && <Tag title={tagTitle} />}
                    {
                        actionDetail &&
                       <>
                           <span>{actionDetail.type} </span>
                           <b>{actionDetail.title} </b>
                       </>
                    }
                </p>
                {
                    actionDetail &&
                    <div>
                        <span>{actionDetail.place_type} </span>
                        <b>{actionDetail.place_title} </b>
                    </div>
                }
            </DesktopBreakpoint>
            <TabletBreakpoint>
                <NotDesktopSizeTitleDetail />
            </TabletBreakpoint>
            <MobileBreakpoint>
                <NotDesktopSizeTitleDetail />
            </MobileBreakpoint>
            <p className={styles.description}>
                {description}
            </p>
        </>
    }


    return (
        <div className={`${styles.profileItemContainer} ${styles[sizes[cardSize]]}`}>
            <div className={styles.image}>
                <ProfileImage imgSrc={imgSrc}  />
            </div>
            <div className={styles.detail}>
                <TitleDetail />
            </div>
            {
                iconSrc && <div className={styles.icon}>
                    <Image
                        width={20}
                        height={20}
                        className="object-fit-cover"
                        alt='image'
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