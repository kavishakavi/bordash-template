import React from 'react'
import TopNavLeft from '../components/TopNavLeft'
import SideNav from '../components/SideNav'
import Vertical from '../components/Navigation/Vertical'
import Pills from '../components/Navigation/Pills'
import BaseNav from '../components/Navigation/BaseNav'
import HorizontalAlignment from '../components/Navigation/HorizontalAlignment'
import Tabs from '../components/Navigation/Tabs'
import FillAndjustify from '../components/Navigation/FillAndjustify'
import TabwithDropdown from '../components/Navigation/TabwithDropdown'
import PillsWithDropdown from '../components/Navigation/PillsWithDropdown'
import Footer from '../components/Footer'
import TopNavFirst from '../components/Navigation/TopNavFirst'
import Main from '../components/main'

export default function dashboard1() {
    return (  
      <div>   
      <TopNavLeft /> 
      <TopNavFirst />               
    <Main />
  
      <BaseNav />
      <HorizontalAlignment />
      <Vertical />
      <Tabs />
    <Pills />
    <FillAndjustify />
    <TabwithDropdown />
    <PillsWithDropdown />
    <Footer />
</div>
   
    )
}


