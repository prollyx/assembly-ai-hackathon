import React, {ReactNode} from 'react';
import {Drawer} from './drawer/drawer';

const PageLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className='page-container'>
            <Drawer />
            <main className='page-layout-main-containter'>
                {children}
            </main>
        </div>
    )
}

export {PageLayout}