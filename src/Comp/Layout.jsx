import { Box } from '@mui/material';
import react, { useEffect } from 'react';


import Navbar from './Navbar';
import Appbar from './Appbar';
import { Outlet } from '@mui/icons-material';
import backendInstance from '../Axios/backendins';


const check = async() => {
 const res = await backendInstance.get('/auth/health')
 console.log(res)
}


const Layout = () => {


    
useEffect(() => {
check()
},[])

   return( 
   
   <>
   {/* <Box 
   
   min-height =  {"100vh"}>

       

    </Box>
    
    <Navbar/>
    <Appbar/> */}


    <div>
        <Outlet/>
    </div>

    </>
    
    )
}


export default Layout;