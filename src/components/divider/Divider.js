'use client'
import styles from './divider.module.scss'

const Divider = ({height = 1}) => {
    return (
        <div className={styles.dividerContainer}  style={{'borderTop': `${height}px solid`}}/>
    );
};

export default Divider;