import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
export  const Timeli = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Garantia ',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'telefono reparado por modulo',
          },
          {
            children: 'cobro pendiente',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'telefono por reparar A32 mudulo',
          },

          {
            label: '2015-09-01 09:12:11',
            children: 'Garantia pc',
          },
        ]}
      />
    </>
  )
}
