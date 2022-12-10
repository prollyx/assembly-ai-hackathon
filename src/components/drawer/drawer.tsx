import {Logout} from '@mui/icons-material';
import Image from 'next/image';
import {useRouter} from 'next/router';
import React, {FC} from 'react';
import logo from '../../../assets/logo.png'
import {DrawerLink} from './drawer-link';

const Drawer: FC = () => {

    const {pathname} = useRouter()

    return (
       <div className='drawer'>
              <div>
                <Image src={logo} alt="logo" height={30}/>
              </div>
              <div className='flex-1 flex flex-col justify-between'>
                <div className='my-20'>
                  <p className="drawer-section-title">Projects</p>
                <DrawerLink currentPath={pathname} href='/projects' label='View All Projects' path='/projects' />
                  <DrawerLink currentPath={pathname} href='/projects/create' label='Create Project' path='/projects/create' />
                </div>

                <div className='mb-10'>
                  <span className='flex text-red-700 hover:text-red-500 font-bold  cursor-pointer' onClick={() => {
                    alert("Not implemented yet")
                  }}>
                      <p className='mr-2 text-red-700 hover:text-red-500'>Logout</p>
                      <Logout />
                  </span>
                </div>
              </div>
       </div>
    );
};

export {Drawer};