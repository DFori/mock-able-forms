import React from 'react';
import { Table, Pagination } from 'antd';

const UsersTable = () => {
  const usersData = [
    {
      key: '1',
      name: 'a.b',
      email: 'anastasiia.bidula@jeanedwards.com'
    },
    {
      key: '2',
      name: 'ableforms',
      email: 'ableforms@ableforms.test'
    },
    {
      key: '3',
      name: 'admin',
      email: 'admin@admin.aa'
    },
    {
      key: '4',
      name: 'test01',
      email: ''
    },
    {
      key: '5',
      name: 'testuser',
      email: ''
    },
    {
      key: '6',
      name: 'vitsum',
      email: 'vitalijs.sumarokovs@jeanedwards.com'
    }
  ];

  const usersColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      sorter: true,
      render: (text) => <span className="font-medium">{text}</span>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: true,
      render: (text) => <span className="text-gray-700">{text}</span>
    }
  ];

  return (
    <div className="p-6">
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

      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default UsersTable;