import React from 'react';
import { Flex, Progress, Card, Space,Typography } from 'antd';


export const Charp = () => (
  <Flex  style={{ marginTop: 12, marginLeft:1 }} gap="middle" vertical>
   
  
    
   

    <Space  size={20}>
  <Card className='flex px-1  w-full max-w-100'
    
   
  >
      <Progress className='px-2 ' strokeColor="#40A2E3"  size={[80, 20]} strokeWidth={12}  type="dashboard" percent={50} status="active" />
   
      <Progress className='px-2  ' strokeColor="#87A922"  size={[80, 20]}  strokeWidth={12} type="dashboard"  percent={70} status="active" />
     
      <Progress  className='px-2 ' strokeColor="#B80000"  size={[80, 20]}  strokeWidth={12}  type="dashboard"  percent={70} status="active" />
      <div className="space-align-container">
        
      
      
     
      </div>
  </Card>
  
</Space>
  </Flex>
  
)