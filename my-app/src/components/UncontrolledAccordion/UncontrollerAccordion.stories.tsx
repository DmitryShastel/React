import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callback = action("accordion mode change event fired")

export const MenuModeChanging = () => <UncontrolledAccordion titleValue={"Menu"}/>;
export const UsersModeChanging = () => <UncontrolledAccordion titleValue={"Users"}/>;



