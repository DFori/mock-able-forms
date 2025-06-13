import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Table,
  Button,
  Input,
  Space,
  Avatar,
  Dropdown,
  Layout,
  Menu,
  Pagination,
  Checkbox,
} from "antd";
import {
  UserOutlined,
  DownOutlined,
  SettingOutlined,
  PlusOutlined,
  LeftOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;

const AdminInterface = () => {
  const [activeTab, setActiveTab] = useState("groups");

  const groupsData = [
    {
      key: "1",
      groupName: "Adj and Ins",
      globalAdmin: false,
      bankRemittance1: false,
      bankRemittance2: false,
      bankRemittance3: false,
      glExport: false,
      glExportStyle: false,
      jobScheduler: false,
      premiumInstall: true,
      premiumAdjust: true,
      underwriterExit: false,
      pricingApp: false,
      retroApp: false,
    },
    {
      key: "2",
      groupName: "RetroGroup",
      globalAdmin: false,
      bankRemittance1: false,
      bankRemittance2: false,
      bankRemittance3: false,
      glExport: false,
      glExportStyle: false,
      jobScheduler: false,
      premiumInstall: false,
      premiumAdjust: false,
      underwriterExit: false,
      pricingApp: false,
      retroApp: true,
    },
    {
      key: "3",
      groupName: "test_af_admin",
      globalAdmin: true,
      bankRemittance1: false,
      bankRemittance2: false,
      bankRemittance3: false,
      glExport: false,
      glExportStyle: false,
      jobScheduler: false,
      premiumInstall: false,
      premiumAdjust: false,
      underwriterExit: false,
      pricingApp: false,
      retroApp: false,
    },
  ];

  const usersData = [
    {
      key: "1",
      name: "a.b",
      email: "anastasiia.bidula@jeanedwards.com",
    },
    {
      key: "2",
      name: "ableforms",
      email: "ableforms@ableforms.test",
    },
    {
      key: "3",
      name: "admin",
      email: "admin@admin.aa",
    },
    {
      key: "4",
      name: "test01",
      email: "",
    },
    {
      key: "5",
      name: "testuser",
      email: "",
    },
    {
      key: "6",
      name: "vitsum",
      email: "vitalijs.sumarokovs@jeanedwards.com",
    },
  ];

  const groupsColumns = [
    {
      title: "Group Name",
      dataIndex: "groupName",
      key: "groupName",
      width: 150,
      sorter: true,
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Global Admin",
      dataIndex: "globalAdmin",
      key: "globalAdmin",
      width: 120,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Bank Remittance",
      dataIndex: "bankRemittance1",
      key: "bankRemittance1",
      width: 140,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Bank Remittance",
      dataIndex: "bankRemittance2",
      key: "bankRemittance2",
      width: 140,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Bank Remittance",
      dataIndex: "bankRemittance3",
      key: "bankRemittance3",
      width: 140,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "GL Export",
      dataIndex: "glExport",
      key: "glExport",
      width: 100,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "GL Export Style",
      dataIndex: "glExportStyle",
      key: "glExportStyle",
      width: 130,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Job Scheduler",
      dataIndex: "jobScheduler",
      key: "jobScheduler",
      width: 120,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Premium Install",
      dataIndex: "premiumInstall",
      key: "premiumInstall",
      width: 130,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Premium Adjust",
      dataIndex: "premiumAdjust",
      key: "premiumAdjust",
      width: 130,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Underwriter Exit",
      dataIndex: "underwriterExit",
      key: "underwriterExit",
      width: 140,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Pricing App",
      dataIndex: "pricingApp",
      key: "pricingApp",
      width: 110,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
    {
      title: "Retro App",
      dataIndex: "retroApp",
      key: "retroApp",
      width: 100,
      align: "center",
      sorter: true,
      render: (checked) => (
        <Checkbox
          checked={checked}
          disabled
          className={checked ? "text-blue-600" : ""}
        />
      ),
    },
  ];

  const usersColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
      sorter: true,
      render: (text) => <span className="font-medium">{text}</span>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true,
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
  ];

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
    <Layout className="min-h-screen">
      {/* Header */}
      <Header
        className="px-4 flex items-center justify-between"
        style={{ backgroundColor: "#5f9ea0", height: "50px" }}
      >
        <div className="flex items-center space-x-6">
          <div className="text-white font-bold text-lg">JE</div>
          <Dropdown overlay={adminMenu} trigger={["click"]}>
            <Button
              type="text"
              className="text-white border-none hover:bg-white hover:bg-opacity-10"
            >
              ADMIN <DownOutlined />
            </Button>
          </Dropdown>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/" className="mr-4 text-white hover:text-gray-200" style={{ color: 'white' }}>
            <LeftOutlined /> Back to Home
          </Link>
          <SettingOutlined className="text-white text-lg cursor-pointer hover:text-gray-200" />
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <div className="flex items-center cursor-pointer hover:bg-opacity-10 px-2 py-1 rounded">
              <Avatar size="small" icon={<UserOutlined />} className="mr-2" />
              <span className="text-white">Test User</span>
              <DownOutlined className="text-white ml-1 text-xs" />
            </div>
          </Dropdown>
        </div>
      </Header>

      {/* Navigation Tabs */}
      <div className="px-4" style={{ backgroundColor: "#5f9ea0" }}>
        <div className="flex space-x-8">
          <div
            className={`text-white py-3 border-b-2 cursor-pointer text-sm ${
              activeTab === "groups"
                ? "border-white font-medium"
                : "border-transparent hover:border-white hover:border-opacity-60"
            }`}
            onClick={() => setActiveTab("groups")}
          >
            Groups
          </div>
          <div
            className={`text-white py-3 border-b-2 cursor-pointer text-sm ${
              activeTab === "users"
                ? "border-white font-medium"
                : "border-transparent hover:border-white hover:border-opacity-60"
            }`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Content className="bg-white flex-1">
        {activeTab === "groups" ? (
          <div className="p-6 mb-32">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Groups</h2>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                style={{ backgroundColor: "#5f9ea0", borderColor: "#5f9ea0" }}
                className="hover:bg-opacity-90"
              >
                Add New Group
              </Button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Table
                columns={groupsColumns}
                dataSource={groupsData}
                pagination={false}
                size="small"
                scroll={{ x: 1400 }}
                className="groups-table"
                rowClassName="hover:bg-gray-50"
              />

              {/* Pagination */}
              <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-2">
                  <Pagination
                    simple
                    current={1}
                    total={3}
                    pageSize={10}
                    showSizeChanger={false}
                    size="small"
                  />
                </div>
                <span className="text-sm text-gray-600">1 - 3 of 3 items</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Users</h2>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <Table
                columns={usersColumns}
                dataSource={usersData}
                pagination={false}
                size="small"
                className="users-table"
                rowClassName="hover:bg-gray-50"
              />

              {/* Pagination */}
              <div className="flex justify-between items-center px-4 py-3 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-2">
                  <Pagination
                    simple
                    current={1}
                    total={6}
                    pageSize={10}
                    showSizeChanger={false}
                    size="small"
                  />
                </div>
                <span className="text-sm text-gray-600">1 - 6 of 6 items</span>
              </div>
            </div>
          </div>
        )}
      </Content>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 px-6 py-3">
        <span className="text-xs text-gray-500">
          © 2025 Able Forma Project. All rights reserved. 3
        </span>
      </div>

      <style jsx>{`
        .groups-table .ant-table-thead > tr > th {
          background-color: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
          font-weight: 600;
          font-size: 11px;
          padding: 8px 8px;
          text-align: center;
        }

        .groups-table .ant-table-tbody > tr > td {
          padding: 8px 8px;
          font-size: 12px;
          border-bottom: 1px solid #f0f0f0;
          text-align: center;
        }

        .groups-table .ant-table-tbody > tr > td:first-child {
          text-align: left;
        }

        .users-table .ant-table-thead > tr > th {
          background-color: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
          font-weight: 600;
          font-size: 12px;
          padding: 12px 16px;
        }

        .users-table .ant-table-tbody > tr > td {
          padding: 12px 16px;
          font-size: 13px;
          border-bottom: 1px solid #f0f0f0;
        }

        .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #1890ff;
          border-color: #1890ff;
        }

        .ant-pagination-simple .ant-pagination-simple-pager {
          height: 24px;
        }

        .ant-pagination-simple .ant-pagination-simple-pager input {
          height: 24px;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

export default AdminInterface;
