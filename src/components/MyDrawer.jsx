import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import Projects from "./Projects.jsx"

const MyDrawer = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" className="bg-yellow-700" onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button>
        <Button type="primary" className="bg-purple-700" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Space>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Drawer #1...</p>
        <p>Drawer #2...</p>
        <p>Drawer #3...</p>
        <Projects />
      </Drawer>
    </>
  );
};
export default MyDrawer;
