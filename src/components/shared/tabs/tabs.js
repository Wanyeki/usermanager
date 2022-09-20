import React from 'react'
import './tabs.css'
import { Tabs, Tab } from 'react-bootstrap'
import AppForm from '../../pages/main/form/form';
import AppList from '../../pages/main/list/list';
import './tabs.css'

function MainTabs() {
  return (
    <div>
      <Tabs
        defaultActiveKey="new"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="new" title="New user">
          <div className='form'>
            <h4>Add User</h4>
            <AppForm />
          </div>
        </Tab>
        <Tab eventKey="view" title="View users">
          <AppList />
        </Tab>
      </Tabs>
    </div>
  )
}

export default MainTabs;