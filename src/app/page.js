'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import variables from './variables.module.scss'
import Header from "@/components/header/index";
import SContainer from "@/components/s-container";
import Slide from "@/components/slide";
import {Col} from "react-bootstrap";
import dynamic from "next/dynamic";
import Sidebar from "@/components/sidebar";
import Post from "@/components/post";
import Divider from "@/components/divider";

const ProfileItem = dynamic(() => import("@/components/profile-item"), { ssr: false })

export default function Home() {

  return (
    <main className={styles.main}>
        <Sidebar />
      <Header />
        <content>
           <header className={styles.slide}>
               <Slide imgSrc={'images/banner.svg'} />
           </header>
            <Col className={styles.leftColumn}>
                <SContainer title="Newest Member" >
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified={true} iconSrc='images/header-logo.svg'/>
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' iconSrc='images/header-logo.svg'/>
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' iconSrc='images/header-logo.svg'/>
                </SContainer>
                <SContainer title="Quests" >
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified={true} iconSrc='images/header-logo.svg'/>
                    <Divider height={3}/>
                </SContainer>
            </Col>
            <Col className={styles.centerColumn}>
                <SContainer title="All Updates" >
                    {/*<div className="dropdown">*/}
                    {/*    <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenu2"*/}
                    {/*            data-bs-toggle="dropdown" aria-expanded="false">*/}
                    {/*        Dropdown*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </SContainer>
                <Post textContent="Hello everyone!" />
                <Post imageContent="https://pcmedia.ign.com/pc/image/article/111/1111475/the-history-of-blizzard-20101021031214207.jpg" linkContent="https://www.blizzard.com/en-us/"/>
            </Col>
            <Col className={styles.rightColumn}>
                <SContainer title="Popular Groups" >
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified={true} iconSrc='images/header-logo.svg'/>
                </SContainer>
                <SContainer title="Badges" >
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' isVerified={true} iconSrc='images/header-logo.svg'/>
                    <Divider height={3}/>
                </SContainer>
            </Col>
        </content>
    </main>
  )
}
