import React from 'react';
import { Flex, Progress, Card, Space,Typography ,Tooltip,Col, Row, Statistic} from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export const Charp = () => (
  <Flex  style={{ marginTop: 12, marginLeft:1 }} gap="middle" vertical>
   
  
    
   

    <Space  size={20}>
  <Card className='flex px-1  w-full max-w-100'
    
   
  >      <Tooltip title="Servcios nuevos">

      <Progress className='px-2 ' strokeColor="#40A2E3"  size={[80, 20]} strokeWidth={12}  type="dashboard" percent={50} status="active" />
      </Tooltip>
   
     
     
  </Card>



  <Card className='flex px-1  w-full max-w-100'
    
   
    >      
     <Tooltip  title="Equipos por presupuesto" >
        <Progress className='px-2  ' strokeColor="#87A922"  size={[80, 20]}  strokeWidth={12} type="dashboard"  percent={20} status="active" />
        </Tooltip>
       
       
    </Card>
    <Card className='flex px-1  w-full max-w-100'
    
   
    >      
     <Tooltip title="Garantias">
      <Progress  className='px-2 ' strokeColor="#B80000"  size={[80, 20]}  strokeWidth={12}  type="dashboard"  percent={60} status="active" />
       
      </Tooltip>
    </Card>

    <Card className='flex px-1  w-full max-w-100'
    
   
    >      
     <Tooltip title="telefonos">
      <Progress  className='px-2 ' strokeColor="#151515"  size={[80, 20]}  strokeWidth={12}  type="dashboard"  percent={90} status="active" />
       
      </Tooltip>
    </Card>
    <Card className='flex px-1  w-full max-w-100'
    
   
    >      
     <Tooltip title="Pc">
      <Progress  className='px-2 ' strokeColor="#F97300"  size={[80, 20]}  strokeWidth={12}  type="dashboard"  percent={30} status="active" />
       
      </Tooltip>
    </Card>
    <Card className='flex px-1  w-full max-w-100'
    
   
    >      
     <Tooltip title="Otros equpipos">
      <Progress  className='px-2 ' strokeColor="#0E46A3"  size={[80, 20]}  strokeWidth={12}  type="dashboard"  percent={10} status="active" />
       
      </Tooltip>
    </Card>

 
</Space>
<Row gutter={16}>
    <Col span={12}>
      <Card size={[80, 20]} bordered={false} className='flex px-2  w-full max-w-100'> 
        <Statistic
          title="Equipos reparados"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Garantias"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
<br />

  </Flex>

  
  
)