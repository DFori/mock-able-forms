import React from 'react';
import { Button, Avatar, Dropdown, Layout, Menu } from 'antd';
import { 
  UserOutlined,
  DownOutlined,
  SettingOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const AdminHeader = ({ onBack }) => {
  const userMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const adminMenu = (
    <Menu>
      <Menu.Item key="option1">Option 1</Menu.Item>
      <Menu.Item key="option2">Option 2</Menu.Item>
    </Menu>
  );

  return (
    <Header className="px-4 flex items-center justify-between" style={{ backgroundColor: '#5f9ea0', height: '50px' }}>
      <div className="flex items-center space-x-6">
        
        <div className="text-white font-bold text-lg">JE</div>
        <Dropdown overlay={adminMenu} trigger={['click']}>
          <Button type="text" className="text-white border-none hover:bg-white hover:bg-opacity-10">
            ADMIN <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      
      <div className="flex items-center space-x-4">
        <SettingOutlined className="text-white text-lg cursor-pointer hover:text-gray-200" />
        <Dropdown overlay={userMenu} trigger={['click']}>
          <div className="flex items-center cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded">
            <Avatar size="small" icon={<UserOutlined />} className="mr-2" />
            <span className="text-white">Test User</span>
            <DownOutlined className="text-white ml-1 text-xs" />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AdminHeader;