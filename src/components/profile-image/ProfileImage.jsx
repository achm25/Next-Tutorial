'use client'
import styles from './profile-image.module.scss'

const ProfileImage = ({imgSrc}) => {

    const colors = ['red', 'red' , 'blue','red', 'red' , 'blue']

    const sideStyles = colors.map((color, index) => ({
        backgroundColor: color,
        transform: `rotate(${60 * index}deg)`,
    }));

    return (
        <div className={styles.hexagon}>
            {colors.map((color, index) => (
                <div key={index} className={`${styles.side} ${styles[`side${index + 1}`]}`} style={{ backgroundColor: color }}></div>
            ))}
        </div>
    );
};

export default ProfileImage;