'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import variables from './variables.module.scss'
import Header from "@/components/header/index";
import SContainer from "@/components/s-container";
import Slide from "@/components/slide";
import {Col} from "react-bootstrap";
import ProfileItem from "@/components/profile-item";
import Sidebar from "@/components/sidebar";
import Post from "@/components/post";

export default function Home() {
  return (
    <main className={styles.main}>
        <Sidebar />
      <Header />
        <content>
           <header className={styles.slide}>
               <Slide imgSrc={'images/news-feed.svg'} />
           </header>
            <Col className={styles.leftColumn}>
                <SContainer title="Newest Member" >
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' iconSrc='images/header-logo.svg'/>
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' iconSrc='images/header-logo.svg'/>
                    <ProfileItem imgSrc='https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg' title='test' description='description' iconSrc='images/header-logo.svg'/>
                </SContainer>
                <SContainer title="Quests" >

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
                <SContainer title="test2" >
                    <Post>

                    </Post>
                </SContainer>
            </Col>
            <Col className={styles.rightColumn}>
                <SContainer title="Popular Groups" >
                </SContainer>
                <SContainer title="Badges" >
                </SContainer>
            </Col>
        </content>
    </main>
  )
}
