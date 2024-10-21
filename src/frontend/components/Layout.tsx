import * as React from 'react'

import { Navbar } from './Navbar'

export const Layout = ({ children }: { children: React.JSX.Element }) => {
    return (
        <>
            <Navbar />
            { children }
        </>
    )
}