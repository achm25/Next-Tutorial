'use client'
import Container from 'react-bootstrap/Container';
import styles from './s-container.module.scss';
import Image from 'next/image';

const SContainer = ({ title, noPadding , children}) => {
    return (
        <Container className={`${styles.sContainer} ${noPadding && styles.noPadding}`}>
            {
                title &&
                <header >
                    <p className={styles.title}> {title} </p>
                </header>
            }
            <content>
                {children}
            </content>
        </Container>
    );
};

export default SContainer;