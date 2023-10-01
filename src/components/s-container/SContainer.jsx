'use client'
import Container from 'react-bootstrap/Container';
import styles from './s-container.module.scss';

const SContainer = ({ title, noPadding, headerActionComponent , children}) => {
    return (
        <Container className={`${styles.sContainer} ${noPadding ? styles.noPadding : ''}`}>
            {
                title &&
                <div className={!children ? styles.noMarginBottom : ''} >
                    <p className={styles.title}> {title} </p>
                    {headerActionComponent}
                </div>
            }
            <main>
                {children}
            </main>
        </Container>
    );
};

export default SContainer;