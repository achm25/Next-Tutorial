'use client'
import { Sidebar as ReactSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BsPerson, BsPeople,BsTrophy, BsStar,BsSuitDiamond,BsCalendar2,BsChatSquareText  ,BsBasket } from "react-icons/bs";

const Sidebar = () => {


    const rootStyles = {
        position: 'absolute',
        top: '60px',
        height: '100%',
        // 'padding-right': '12px',
        // 'padding-left': '24px'
    };


    const menuItemStyles = {
        root: {
            // width: '16px',
    //         display: 'flex',
    //         'justify-content': 'center',
    // 'align-items': 'center',
    // 'align-content': 'center',
        },
        // icon: {
        //     color: themes[theme].menu.icon,
        //     [`&.${menuClasses.disabled}`]: {
        //         color: themes[theme].menu.disabled.color,
        //     },
        // },
        // SubMenuExpandIcon: {
        //     color: '#b6b7b9',
        // },
        // subMenuContent: ({ level }) => ({
        //     backgroundColor:
        //         level === 0
        //             ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
        //             : 'transparent',
        // }),
        button: {
            '&:hover': {
                backgroundColor: '#00d1e0',
                color: 'white',
            },
            'border-radius': '0.5rem'
        },
    };


    return (
        <ReactSidebar
            width='80px'
            rootStyles={rootStyles}
        >
            <Menu iconShape="square" menuItemStyles={menuItemStyles}>
                <MenuItem icon={<BsPerson />} />
                <MenuItem icon={<BsPeople />} />
                <MenuItem icon={<BsTrophy />} />
                <MenuItem icon={<BsStar />} />
                <MenuItem icon={<BsSuitDiamond />} />
                <MenuItem icon={<BsCalendar2 />} />
                <MenuItem icon={<BsChatSquareText />} />
                <MenuItem icon={<BsBasket />} />
            </Menu>
        </ReactSidebar>
    );
};

export default Sidebar;