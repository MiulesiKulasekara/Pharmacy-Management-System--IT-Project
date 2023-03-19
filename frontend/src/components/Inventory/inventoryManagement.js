import React from 'react'
import 'antd/dist/antd.css'
import { Tabs } from 'antd';
import { Container } from 'react-bootstrap';
import AddItem from './addItem';
import InventoryList from './inventoryList';
import InventoryReport from './inventoryReport';

const { TabPane } = Tabs;

const InventoryManagement = () => {
  return (
      <Container>
      <div className="ml-3">
            <h2 className="text-center m-2" style={{ fontSize: "35px" }}>INVENTORY MANAGEMENT</h2>
            <br />

            <br />
            <Tabs defaultActiveKey="1">
                  <TabPane tab="ADD INVENTORIES" key="1">
                        <div className="row">
                              <AddItem />

                        </div>
                  </TabPane>
                  <TabPane tab="INVENTORY LIST" key="2">

                        <div className="row">
                             <InventoryList />
                        </div>
                  </TabPane>
                  <TabPane tab="INVENTORY LIST REPORT" key="3">
                        <div className="row">
                              <InventoryReport />

                        </div>
                  </TabPane>
            </Tabs>
      </div>
</Container>
  )
}

export default InventoryManagement