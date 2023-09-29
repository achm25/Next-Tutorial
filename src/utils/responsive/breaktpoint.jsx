import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import {screens} from "./constants";

const breakpoints = {
    [screens.DESKTOP]: '(min-width: 1025px)',
    [screens.TABLET]: '(min-width: 768px) and (max-width: 1024px)',
    [screens.MOBILE]: '(max-width: 767px)',
};
const { string, object } = PropTypes;
export default function Breakpoint(props) {
    const breakpoint = breakpoints[props.name] || screens.DESKTOP;
    return (
        <MediaQuery {...props } query={breakpoint}>
            {props.children}
        </MediaQuery>
    );
}
React.propTypes = {
    name: string,
    children: object,
}