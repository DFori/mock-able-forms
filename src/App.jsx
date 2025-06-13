import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Card, Space, Typography } from 'antd';
import AdminInterface from './AdminInterface';
import WorkflowResults from './WorkflowResults';


const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminInterface />} />
        <Route path="/workflow" element={<WorkflowResults />} />
      </Routes>
    </Router>
  );
};

const LandingPage = () => {
  return (
    <Layout className="min-h-screen flex flex-col">
      <Header className="flex items-center justify-between px-6 bg-white shadow-sm">
        <div className="text-xl font-bold text-gray-100">JE Applications</div>
      </Header>
      
      <Content className="flex-grow p-8 bg-gray-50">
        <div className="max-w-4xl mb-20 mt-10 mx-auto h-full flex flex-col justify-center">
          <Title level={2} className="text-center mb-8">Select Application</Title>
          
          <Space size="large" className="w-full justify-center">
            <Link to="/admin">
              <Card 
                hoverable 
                className="w-64 h-64 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">👨‍💼</div>
                <Title level={4} className="text-center">Admin Interface</Title>
                <p className="text-gray-600 text-center">Manage users and groups</p>
              </Card>
            </Link>
            
            <Link to="/workflow">
              <Card 
                hoverable 
                className="w-64 h-64 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">📊</div>
                <Title level={4} className="text-center">Workflow Results</Title>
                <p className="text-gray-600 text-center">View and manage workflows</p>
              </Card>
            </Link>
          </Space>
        </div>
      </Content>
      
      <Footer className="text-center bg-white">
        © 2025 Able Forma Project. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default App;