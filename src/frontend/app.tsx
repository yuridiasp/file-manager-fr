import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

import { Layout } from './components/Layout'
import { DrawerViewer } from './pages/DrawerViewer'
import { Customers } from './pages/Customers'
import { Documents } from './pages/Documents'
import { SpaceMap } from './pages/SpaceMap'
import { Dashboard } from './pages/Dashboard'
import { Configurations } from './pages/Configurations'

export const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Dashboard />}/>
                        <Route path='/drawerviewer' element={<DrawerViewer />} />
                        <Route path='customers' element={<Customers />}/>
                        <Route path='/documents' element={<Documents />}/>
                        <Route path='/spacemap' element={<SpaceMap />}/>
                        <Route path='/configuratios' element={<Configurations />}/>
                    </Routes>
                </Layout>
            </Router>
        </ChakraProvider>
    )
}