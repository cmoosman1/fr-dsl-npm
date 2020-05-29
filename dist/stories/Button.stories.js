import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button';
export default {
    title: 'Button',
    component: Button
};
export var Default = function () { return React.createElement(Button, { onClick: action('clicked') }, "Default Button"); };
export var Primary = function () { return React.createElement(Button, { primary: true, onClick: action('clicked') }, "Primary Button"); };
