'use client'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from './dropdown.module.scss';

const SDropdown = ({title,items}) => {

    return (
        <DropdownButton className={styles.sDropdownContainer} title={title}>
            {
                items &&
                items.map((item, key) => <Dropdown.Item key={key} href={item.link}>{item.title}</Dropdown.Item>)
            }
        </DropdownButton>
    );
};

export default SDropdown;