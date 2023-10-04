'use client'
import styles from './tag.module.scss'

const Tag = ({title}) => {

    return (
        <div className={styles.tagContainer}>
            {title}
        </div>
    );
};

export default Tag;