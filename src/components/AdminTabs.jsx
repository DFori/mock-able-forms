import React from 'react';

const AdminTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="px-4" style={{ backgroundColor: '#5f9ea0' }}>
      <div className="flex space-x-8">
        <div 
          className={`text-white py-3 border-b-2 cursor-pointer text-sm ${
            activeTab === 'groups' ? 'border-white font-medium' : 'border-transparent hover:border-white hover:border-opacity-60'
          }`}
          onClick={() => setActiveTab('groups')}
        >
          Groups
        </div>
        <div 
          className={`text-white py-3 border-b-2 cursor-pointer text-sm ${
            activeTab === 'users' ? 'border-white font-medium' : 'border-transparent hover:border-white hover:border-opacity-60'
          }`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </div>
      </div>
    </div>
  );
};

export default AdminTabs;