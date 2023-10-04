'use client'
import styles from './home.module.scss'
import Slide from "@/components/slide";
import {Col} from "react-bootstrap";
import SContainer from "@/components/s-container";
import Divider from "@/components/divider";
import SDropdown from "@/components/s-drop-down";
import Post from "@/components/post";
import ProfileItem from "@/components/profile-item";
import {newestMembers, quests, popularGroups, badges, posts} from "./mock";

const Home = ({height = 1}) => {
    return (
            <div className={styles.homeContainer}>
                <header className={styles.slide}>
                    <Slide imgSrc={'images/banner.svg'} />
                </header>
                <Col className={styles.leftColumn}>
                    <SContainer title="Newest Member" >
                        {
                            newestMembers.map((data) => <ProfileItem key={data.id} {...data} />)
                        }
                    </SContainer>
                    <SContainer title="Quests" >
                        {
                            quests.map((data) => <ProfileItem key={data.id} {...data} />)
                        }
                        <Divider height={3}/>
                    </SContainer>
                </Col>
                <Col className={styles.centerColumn}>
                    <SContainer title="All Updates" headerActionComponent={<SDropdown title='Everything' />} />
                    {
                        posts.map((post) => <Post key={post.id} {...post} />)
                    }
                </Col>
                <Col className={styles.rightColumn}>
                    <SContainer title="Popular Groups" >
                        {
                            popularGroups.map((data) => <ProfileItem key={data.id} {...data} />)
                        }
                    </SContainer>
                    <SContainer title="Badges" >
                        {
                            badges.map((data) => <ProfileItem key={data.id} {...data} />)
                        }
                        <Divider height={3}/>
                    </SContainer>
                </Col>
            </div>
    );
};

export default Home;