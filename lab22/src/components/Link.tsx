import React from 'react';
import PropTypes from 'prop-types';
import {VisibilityFilters} from "../types";

interface LinkProps {
    active: boolean;
    filter : VisibilityFilters;
    children: React.ReactNode;
    onClick: () => void;
}

const Link: React.FC<LinkProps> = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </button>
);


export default Link;