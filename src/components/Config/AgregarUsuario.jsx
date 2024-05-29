import { PlusCircleFilled,QuestionCircleOutlined,PlusOutlined,WechatFilled ,UpCircleFilled} from '@ant-design/icons';

import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space ,FloatButton,Tooltip} from 'antd';
import { FormAgreUser } from './Usuarios/FormAgreUsua';
import { FormChats } from './Usuarios/chat/ForChats';

const { Option } = Select;






export const AgregarUsuario = () =>  {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const showDrawer = () => { setOpen(true); };
  const showDrawer2 = () => { setOpen2(true); };

  const onClose2 = () => { setOpen2(false);};
  const onClose = () => { setOpen(false);};

  return (

  < >
    
  
      <FloatButton />
      <FloatButton icon={<PlusCircleFilled />} onClick={showDrawer} tooltip={<div>Agregar Usuario</div>} />
      <FloatButton.Group
      icon={<UpCircleFilled />}
      trigger="click"
      type="primary"
      style={{
        right: 24,
      }}
     
    >    <Tooltip placement="leftBottom" title="Agragar usuario" color='blue'>

      <FloatButton  icon={<PlusCircleFilled />} onClick={showDrawer} type="primary"
        />
                </Tooltip>
                <Tooltip placement="leftBottom" title="Chats" color='blue'>
      <FloatButton icon={<WechatFilled />} onClick={showDrawer2} type="primary" />
      </Tooltip>

    </FloatButton.Group>

    
      <Drawer
        title="Agregar Usuario"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onClose} type="primary">
              Agregar
            </Button>
          </Space>
        }
      >
        <FormAgreUser></FormAgreUser>
      </Drawer>
 
      <Drawer
       
        width={300}
        onClose={onClose2}
        open={open2}
       
      >
       <FormChats></FormChats>
      </Drawer>
      

  </>
  
)
}
