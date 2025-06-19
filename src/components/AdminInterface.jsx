// src/components/AdminInterface.jsx
import React, { useState } from 'react';
import { Layout } from 'antd'; // Make sure Layout is imported
import AdminHeader from './common/Header';
import AdminTabs from './AdminTabs';
import GroupsTable from './GroupsTabs';
import UsersTable from './UsersTable';
import AdminFooter from './common/Footer';

const { Content } = Layout;

const AdminInterface = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('groups');

  return (
    <Layout className="min-h-screen"> {/* min-h-screen for height, global CSS for width/flex */}
      <AdminHeader onBack={onBack} />
      <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Content className="bg-white flex-1"> {/* flex-1 ensures it grows to fill space */}
        {/* Your content will go here */}
        {activeTab === 'groups' ? (
          <GroupsTable />
        ) : (
          <UsersTable />
        )}
      </Content>
      
      <AdminFooter />
    </Layout>
  );
};

export default AdminInterface;