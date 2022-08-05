import React from 'react';

// eslint-disable-next-line require-jsdoc
export const MainLayout: React.FC<any> = ({ Content }) => (
    <div className="container">
        <Content />
    </div>
);
