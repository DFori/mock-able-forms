import React from 'react';
import { Table, Button, Pagination, Checkbox } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const GroupsTable = () => {
  const groupsData = [
    {
      key: '1',
      groupName: 'Adj and Ins',
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
      retroApp: false
    },
    {
      key: '2',
      groupName: 'RetroGroup',
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
      retroApp: true
    },
    {
      key: '3',
      groupName: 'test_af_admin',
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
      retroApp: false
    }
  ];

  const groupsColumns = [
    {
      title: 'Group Name',
      dataIndex: 'groupName',
      key: 'groupName',
      width: 150,
      sorter: true,
      render: (text) => <span className="font-medium">{text}</span>
    },
    {
      title: 'Global Admin',
      dataIndex: 'globalAdmin',
      key: 'globalAdmin',
      width: 120,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Bank Remittance',
      dataIndex: 'bankRemittance1',
      key: 'bankRemittance1',
      width: 140,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Bank Remittance',
      dataIndex: 'bankRemittance2',
      key: 'bankRemittance2',
      width: 140,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Bank Remittance',
      dataIndex: 'bankRemittance3',
      key: 'bankRemittance3',
      width: 140,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'GL Export',
      dataIndex: 'glExport',
      key: 'glExport',
      width: 100,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'GL Export Style',
      dataIndex: 'glExportStyle',
      key: 'glExportStyle',
      width: 130,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Job Scheduler',
      dataIndex: 'jobScheduler',
      key: 'jobScheduler',
      width: 120,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Premium Install',
      dataIndex: 'premiumInstall',
      key: 'premiumInstall',
      width: 130,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Premium Adjust',
      dataIndex: 'premiumAdjust',
      key: 'premiumAdjust',
      width: 130,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Underwriter Exit',
      dataIndex: 'underwriterExit',
      key: 'underwriterExit',
      width: 140,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Pricing App',
      dataIndex: 'pricingApp',
      key: 'pricingApp',
      width: 110,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    },
    {
      title: 'Retro App',
      dataIndex: 'retroApp',
      key: 'retroApp',
      width: 100,
      align: 'center',
      sorter: true,
      render: (checked) => (
        <Checkbox checked={checked} disabled className={checked ? 'text-blue-600' : ''} />
      )
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Groups</h2>
        <Button 
          type="primary" 
          icon={<PlusOutlined />}
          style={{ backgroundColor: '#5f9ea0', borderColor: '#5f9ea0' }}
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
    </div>
  );
};

export default GroupsTable;