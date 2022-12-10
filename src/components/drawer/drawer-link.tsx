import classnames from 'classnames'
import Link from 'next/link'
import React, {FC} from 'react'

export interface DrawerLinkProps {
    href: string
    label: string
    currentPath: string
    path: string
}

const DrawerLink: FC<DrawerLinkProps> = ({currentPath, href, label, path}) => {
    return (
        <Link href={href}>
          <p className={classnames('drawer-link', {
                    'drawer-link-active': currentPath === path
                })}>{label}</p>
        </Link>
    )
}

export {DrawerLink}