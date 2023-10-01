'use client'
import styles from './home.module.scss'
import Slide from "@/components/slide";
import {Col} from "react-bootstrap";
import SContainer from "@/components/s-container";
import Divider from "@/components/divider";
import SDropdown from "@/components/s-drop-down";
import Post from "@/components/post";
import ProfileItem from "@/components/profile-item";

const Home = ({height = 1}) => {
    return (
            <div className={styles.homeContainer}>
                <header className={styles.slide}>
                    <Slide imgSrc={'images/banner.svg'} />
                </header>
                <Col className={styles.leftColumn}>
                    <SContainer title="Newest Member" >
                        <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified iconSrc='images/header-logo.svg'/>
                        <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' iconSrc='images/header-logo.svg'/>
                        <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' iconSrc='images/header-logo.svg'/>
                    </SContainer>
                    <SContainer title="Quests" >
                        <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified iconSrc='images/header-logo.svg'/>
                        <Divider height={3}/>
                    </SContainer>
                </Col>
                <Col className={styles.centerColumn}>
                    <SContainer title="All Updates" headerActionComponent={<SDropdown title='Everything' />} />
                    <Post textContent="Hello everyone!" />
                    <Post imageContent="https://pcmedia.ign.com/pc/image/article/111/1111475/the-history-of-blizzard-20101021031214207.jpg" linkContent="https://www.blizzard.com/en-us/"/>
                </Col>
                <Col className={styles.rightColumn}>
                    <SContainer title="Popular Groups" >
                        <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified iconSrc='images/header-logo.svg'/>
                    </SContainer>
                    <SContainer title="Badges" >
                        <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified iconSrc='images/header-logo.svg'/>
                        <Divider height={3}/>
                    </SContainer>
                </Col>
            </div>
    );
};

export default Home;