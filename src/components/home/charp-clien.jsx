import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic ,Space} from 'antd';

export const Charpclien = () => (
  <div>

<Space size={20} >
 <Row  gutter={16}>
    <Col className='px-2'  span={80}>
      <Card   bordered={false}>
        <Statistic
          title="Clientes"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    
    
  </Row>

<Row  span={20} >
<Col className='px-2'  span={80}>
  <Card   className='flex px-1  w-full max-w-100'
        bordered={false}>
        <Statistic
          title="Garantias"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    </Row>
   </Space>
    </div>
)