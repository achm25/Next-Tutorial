import React from 'react';
import {screens} from "./constants";
import Breakpoint from './breaktpoint';
export default function TabletBreakpoint(props) {
    return (
        <Breakpoint name={screens.TABLET}>
    {props.children}
</Breakpoint>
);
}