'use client'
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import styles from './slide.module.scss'

const Slide = ({ imgSrc , alt = 'slide image', placeholder}) => {
    return (
        <Container className={styles.slideContainer}>
            <Image
                priority
                fill
                className="object-fit-cover"
                src={imgSrc}
                placeholder={placeholder}
                alt={alt}
            />
        </Container>
    );
};

export default Slide;