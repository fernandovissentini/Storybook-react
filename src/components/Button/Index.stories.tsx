import {Meta} from "@storybook/react";
import React from 'react';
import MyButton from './Index';

export default {
    title: 'My Button',
    component: MyButton
} as Meta

export const Primary = () => <MyButton variant='primary'>Primary</MyButton>
export const Secondary = () => <MyButton variant='secondary'>Primary</MyButton>
export const Success = () => <MyButton variant='success'>Primary</MyButton>
export const Danger = () => <MyButton variant='danger'>Primary</MyButton>