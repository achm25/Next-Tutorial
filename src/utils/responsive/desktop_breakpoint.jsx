import React from 'react';
import {screens} from "./constants";
import Breakpoint from './breaktpoint';
export default function DesktopBreakpoint(props) {
    return (
        <Breakpoint name={screens.DESKTOP}>
    {props.children}
</Breakpoint>
);
}