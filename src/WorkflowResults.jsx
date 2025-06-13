import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  DatePicker,
  Input,
  Tag,
  Space,
  Avatar,
  Dropdown,
  Layout,
  Menu,
  Pagination,
  Select,
  Alert,
} from "antd";
import {
  CalendarOutlined,
  ExportOutlined,
  UserOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  ExclamationCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Option } = Select;

const WorkflowResults = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [activeTab, setActiveTab] = useState("results");
  const [showAlert, setShowAlert] = useState(true);

  const data = [
    {
      key: "1",
      workflowId: "dd402501-abf9-4...",
      creationDate: "2025/03/31 11:22",
      cedantName: "American Ag - Lo...",
      contractId: "1-1000049",
      contractCurrency: "USD",
      contractSection: "Main Section",
      periodStart: "2022/01/01 00:00",
      adjustmentNumber: 1,
      adjustmentCurrency: "USD",
      adjustedSuppl: 0.0,
      adjustedPremium: 0.0,
      adjustmentPremium: 0.0,
      status: "In progress",
      error: "",
      sicsResult: "",
    },
  ];

  const columns = [
    {
      title: "Workflow Id",
      dataIndex: "workflowId",
      key: "workflowId",
      width: 140,
    },
    {
      title: "Creation Date",
      dataIndex: "creationDate",
      key: "creationDate",
      width: 140,
    },
    {
      title: "Cedant Name",
      dataIndex: "cedantName",
      key: "cedantName",
      width: 120,
    },
    {
      title: "Contract Id",
      dataIndex: "contractId",
      key: "contractId",
      width: 100,
    },
    {
      title: "Contract Currency",
      dataIndex: "contractCurrency",
      key: "contractCurrency",
      width: 130,
    },
    {
      title: "Contract Section",
      dataIndex: "contractSection",
      key: "contractSection",
      width: 120,
    },
    {
      title: "Period Start",
      dataIndex: "periodStart",
      key: "periodStart",
      width: 120,
    },
    {
      title: "Adjustment Number",
      dataIndex: "adjustmentNumber",
      key: "adjustmentNumber",
      width: 130,
    },
    {
      title: "Adjustment Currency",
      dataIndex: "adjustmentCurrency",
      key: "adjustmentCurrency",
      width: 140,
    },
    {
      title: "Adjusted Suppl",
      dataIndex: "adjustedSuppl",
      key: "adjustedSuppl",
      width: 120,
      render: (value) => value.toFixed(2),
    },
    {
      title: "Adjusted Premium",
      dataIndex: "adjustedPremium",
      key: "adjustedPremium",
      width: 130,
      render: (value) => value.toFixed(2),
    },
    {
      title: "Adjustment Premium",
      dataIndex: "adjustmentPremium",
      key: "adjustmentPremium",
      width: 140,
      render: (value) => value.toFixed(2),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
    },
    {
      title: "Error",
      dataIndex: "error",
      key: "error",
      width: 100,
    },
    {
      title: "Sics Result",
      dataIndex: "sicsResult",
      key: "sicsResult",
      width: 100,
    },
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Layout
      className="min-h-screen w-screen h-screen flex flex-col"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Header */}
      <Header
        className="flex items-center justify-between px-6 bg-red-600 shadow-sm w-full"
        style={{ backgroundColor: "#b91c1c" }}
      >
        <div className="flex items-center space-x-6">
          <div className="text-white font-bold text-lg">JE</div>
          <Link
            to="/"
            className="mr-4 text-white hover:text-gray-200"
            style={{ color: "white" }}
          >
            <LeftOutlined /> Back to Home
          </Link>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>Option 1</Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <Button type="text" className="text-white border-none">
              PREMIUM ADJUSTMENTS <DownOutlined />
            </Button>
          </Dropdown>
        </div>

        <Dropdown overlay={userMenu} trigger={["click"]}>
          <div className="flex items-center cursor-pointer">
            <Avatar size="small" icon={<UserOutlined />} className="mr-2" />
            <span className="text-white">Test User</span>
            <DownOutlined className="text-white ml-1" />
          </div>
        </Dropdown>
      </Header>

      {/* Navigation Tabs */}
      <div className="bg-red-600 px-4">
        <div className="flex space-x-8">
          <div
            className={`text-white py-3 border-b-2 cursor-pointer ${
              activeTab === "adjustments"
                ? "border-white"
                : "border-transparent hover:border-white"
            }`}
            onClick={() => setActiveTab("adjustments")}
          >
            Adjustments
          </div>
          <div
            className={`text-white py-3 border-b-2 cursor-pointer ${
              activeTab === "results"
                ? "border-white"
                : "border-transparent hover:border-white"
            }`}
            onClick={() => setActiveTab("results")}
          >
            Results
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Content
        className="flex-grow p-8 bg-gray-50 w-full"
        style={{ margin: 0 }}
      >
        {activeTab === "adjustments" ? (
          <div className="bg-white rounded-lg shadow-sm h-full">
            {/* Adjustments Header */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Adjustments
              </h2>

              <div className="grid grid-cols-4 gap-8">
                {/* Search Column */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">
                    Search
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        SICS ID
                      </label>
                      <Select
                        defaultValue="9-1000506"
                        className="w-full"
                        size="small"
                      >
                        <Option value="9-1000506">9-1000506</Option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Reinsurer
                      </label>
                      <Select
                        defaultValue="Toa Reinsurance Com..."
                        className="w-full"
                        size="small"
                      >
                        <Option value="toa">Toa Reinsurance Com...</Option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Broker
                      </label>
                      <Select
                        defaultValue="Willis Towers Watson, ..."
                        className="w-full"
                        size="small"
                      >
                        <Option value="willis">
                          Willis Towers Watson, ...
                        </Option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Year
                      </label>
                      <Select
                        defaultValue="2025"
                        className="w-full"
                        size="small"
                      >
                        <Option value="2025">2025</Option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Cedent
                      </label>
                      <Select
                        defaultValue="Zurich Insurance Grou..."
                        className="w-full"
                        size="small"
                      >
                        <Option value="zurich">Zurich Insurance Grou...</Option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Currency
                      </label>
                      <Select
                        defaultValue="USD"
                        className="w-full"
                        size="small"
                      >
                        <Option value="USD">USD</Option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Main Class Of Business
                      </label>
                      <Select
                        defaultValue="AviationADA"
                        className="w-full"
                        size="small"
                      >
                        <Option value="aviation">AviationADA</Option>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        MTG Number
                      </label>
                      <Select
                        defaultValue="MTG66"
                        className="w-full"
                        size="small"
                      >
                        <Option value="mtg66">MTG66</Option>
                      </Select>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button size="small" className="text-gray-600">
                      Clear
                    </Button>
                    <Button
                      type="primary"
                      size="small"
                      className="bg-red-600 border-red-600"
                    >
                      Search
                    </Button>
                  </div>
                </div>

                {/* Select Column */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-700">
                      Select
                    </h3>
                    <Button type="link" className="text-red-600 p-0 text-xs">
                      Select all
                    </Button>
                  </div>
                  <div className="min-h-96 border border-gray-200 rounded bg-gray-50">
                    {/* Empty select area */}
                  </div>
                </div>

                {/* Results Column */}
                <div className="space-y-4 col-span-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-700">
                      Results
                    </h3>
                    <div className="flex space-x-2">
                      <Button type="link" className="text-red-600 p-0 text-xs">
                        Clear
                      </Button>
                      <Button type="link" className="text-red-600 p-0 text-xs">
                        Select all
                      </Button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded bg-white">
                    <div className="overflow-x-auto">
                      <Table
                        columns={columns}
                        dataSource={data}
                        rowSelection={rowSelection}
                        pagination={false}
                        size="small"
                        className="workflow-table"
                        scroll={{ x: 1500 }}
                      />
                    </div>

                    {/* Pagination for Results Table */}
                    <div className="flex justify-between items-center p-2 border-t border-gray-200 bg-gray-50">
                      <div className="flex items-center space-x-1">
                        <Button
                          size="small"
                          icon={<DoubleLeftOutlined />}
                          disabled
                        />
                        <Button size="small" icon={<LeftOutlined />} disabled />
                        <Button
                          size="small"
                          type="primary"
                          className="bg-blue-500"
                        >
                          1
                        </Button>
                        <Button
                          size="small"
                          icon={<RightOutlined />}
                          disabled
                        />
                        <Button
                          size="small"
                          icon={<DoubleRightOutlined />}
                          disabled
                        />
                      </div>
                      <span className="text-xs text-gray-600">
                        1 - 1 of 1 items
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm">
            {/* Results Header Section */}
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Workflow Results
              </h2>

              {/* Filters and Actions */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">From</span>
                    <DatePicker
                      placeholder="Select date"
                      className="w-36"
                      suffixIcon={<CalendarOutlined />}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">To</span>
                    <DatePicker
                      placeholder="Select date"
                      className="w-36"
                      suffixIcon={<CalendarOutlined />}
                    />
                  </div>
                  <Button
                    type="primary"
                    className="bg-red-600 border-red-600 hover:bg-red-700"
                    icon={<ExportOutlined />}
                  >
                    Export To Excel
                  </Button>
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="small"
                    className="text-green-600 border-green-600"
                  >
                    Success
                  </Button>
                  <Button size="small" className="text-red-600 border-red-600">
                    Failure
                  </Button>
                  <Button
                    size="small"
                    className="text-blue-600 border-blue-600"
                  >
                    In Progress
                  </Button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table
                columns={columns}
                dataSource={data}
                rowSelection={rowSelection}
                pagination={false}
                size="small"
                className="workflow-table"
                scroll={{ x: 1500 }}
              />
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Button size="small" icon={<DoubleLeftOutlined />} disabled />
                <Button size="small" icon={<LeftOutlined />} disabled />
                <Button size="small" type="primary" className="bg-blue-500">
                  1
                </Button>
                <Button size="small" icon={<RightOutlined />} disabled />
                <Button size="small" icon={<DoubleRightOutlined />} disabled />
              </div>
              <span className="text-sm text-gray-600">1 - 1 of 1 items</span>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {showAlert && (
          <Alert
            message="Custom alert."
            type="error"
            icon={<ExclamationCircleOutlined />}
            closable
            onClose={() => setShowAlert(false)}
            closeIcon={<CloseOutlined />}
            className="fixed bottom-4 right-4 max-w-md z-50"
          />
        )}
      </Content>

      {/* Footer */}
      <Footer className="text-center bg-white w-full" style={{ margin: 0 }}>
        <span className="text-xs text-gray-500">
          © 2025 Able Forma Project. All rights reserved. 3
        </span>
      </Footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        #root {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .ant-layout {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .ant-layout-header {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
        }

        .ant-layout-content {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
        }

        .ant-layout-footer {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 !important;
        }
        .workflow-table .ant-table-thead > tr > th {
          background-color: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
          font-weight: 600;
          font-size: 12px;
          padding: 8px 12px;
        }

        .workflow-table .ant-table-tbody > tr > td {
          padding: 8px 12px;
          font-size: 12px;
          border-bottom: 1px solid #f0f0f0;
        }

        .workflow-table .ant-table-tbody > tr:hover > td {
          background-color: #f5f5f5;
        }
      `}</style>
    </Layout>
  );
};

export default WorkflowResults;
