import classnames from 'classnames'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {FC} from 'react'

export interface DrawerLinkProps {
    href: string
    label: string
}

const DrawerLink: FC<DrawerLinkProps> = ({ href, label}) => {

    const { asPath:currentPath } = useRouter();


    return (
        <Link href={href}>
          <p className={classnames('drawer-link', {
                    'drawer-link-active': currentPath === href
                })}>{label}</p>
        </Link>
    )
}

export {DrawerLink}