import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff,
}

const callback = action("on or clicked");

export const OnMode = () => <OnOff on={true} onChange={callback}/>;
export const OffMode = () => <OnOff on={false} onChange={callback}/>;

export const ModeChanging = () => {
    const [value, setvalue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setvalue}/>
};
