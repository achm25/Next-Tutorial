import React from 'react';
import {screens} from "./constants";
import Breakpoint from './breaktpoint';
export default function MobileBreakpoint(props) {
    return (
        <Breakpoint name={screens.MOBILE}>
    {props.children}
</Breakpoint>
);
}