
import React from 'react'
import { Button, Container} from 'react-bootstrap';
import AppFooter from '../../shared/footer/footer';
import AppNavBar from '../../shared/navbar/nav';
import MainTabs from '../../shared/tabs/tabs';
import './main.css'

const Main = () => {
  return (
    <div>
        <AppNavBar></AppNavBar>
        <Container>
            <header>
               <h3 className='main_header'>Manage Users</h3>
            </header>
            <MainTabs></MainTabs>
        </Container>
        <AppFooter/>
    </div>
  )
}

export default Main;