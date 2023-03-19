import React from 'react'
import 'antd/dist/antd.css'
import { Tabs } from 'antd';
import { Container } from 'react-bootstrap';
import AddSupplier from './addSupplier';
import SupplierList from './SupplierList';
import SuppliersReport from './suppliersReport';

const { TabPane } = Tabs;

const SupplyManagement = () => {
  return (
      <Container>
      <div className="ml-3">
            <h2 className="text-center m-2" style={{ fontSize: "35px" }}>SUPPLY MANAGEMENT</h2>
            <br />

            <br />
            <Tabs defaultActiveKey="1">
                  <TabPane tab="SUPPLIERS DETAILS" key="1">
                        <div className="row">
                              <SupplierList />

                        </div>
                  </TabPane>
                  <TabPane tab="ADD SUPPLIERS" key="2">

                        <div className="row">
                             <AddSupplier />
                        </div>
                  </TabPane>
                  <TabPane tab="SUPPLIERS DETAILS REPORT" key="3">
                        <div className="row">
                              <SuppliersReport />

                        </div>
                  </TabPane>
            </Tabs>
      </div>
</Container>
  )
}

export default SupplyManagement