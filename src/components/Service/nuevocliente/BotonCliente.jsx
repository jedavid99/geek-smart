import { PlusCircleFilled,QuestionCircleOutlined,PlusOutlined } from '@ant-design/icons';

import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space ,FloatButton, Tooltip} from 'antd';
import { FormCient } from './FormClient';

export const BotonCliente = () =>  {
  const [open, setOpen] = useState(false);
  const showDrawer = () => { setOpen(true); };
  const onClose = () => { setOpen(false);};

  return (

  < >
    
  
    <Tooltip title="Agregar Cliente" color='blue'  >
      <FloatButton icon={<PlusCircleFilled />} type='primary' onClick={showDrawer} />

      </Tooltip>
       
      <Drawer 
              width={600}

        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }} extra={
           
                <h1>agregar cliente</h1>
              
              
            
          }>

<FormCient></FormCient>

<Col span={12}>
           <Space>
               
              <Button onClick={onClose}>Cancelar</Button>
              <Button onClick={onClose} type="primary">
                Agregar
              </Button>
              
            </Space>
            </Col>
 
            
      </Drawer>
      

  </>
  
)
}
