import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Card, Space, Typography } from "antd";
import AdminInterface from "./AdminInterface";
import WorkflowResults from "./WorkflowResults";

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
    <Layout className="min-h-screen w-screen h-screen flex flex-col" style={{ margin: 0, padding: 0 }}>
      <Header className="flex items-center justify-between px-6 bg-white shadow-sm w-full" style={{ margin: 0 }}>
        <div className="text-xl font-bold text-gray-100">JE Applications</div>
      </Header>

      <Content className="flex-grow p-8 bg-gray-50 w-full" style={{ margin: 0 }}>
        <div className="w-full mb-20 mx-auto h-full flex flex-col justify-center">
          <Title level={2} className="text-center mb-8">
            Select Application
          </Title>

          <Space size="large" className="w-full justify-center">
            <Link to="/admin">
              <Card
                hoverable
                className="w-64 h-64 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">👨‍💼</div>
                <Title level={4} className="text-center">
                  Admin Interface
                </Title>
                <p className="text-gray-600 text-center">
                  Manage users and groups
                </p>
              </Card>
            </Link>

            <Link to="/workflow">
              <Card
                hoverable
                className="w-64 h-64 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">📊</div>
                <Title level={4} className="text-center">
                  Workflow Results
                </Title>
                <p className="text-gray-600 text-center">
                  View and manage workflows
                </p>
              </Card>
            </Link>
          </Space>
        </div>
      </Content>

      <Footer className="text-center bg-white w-full" style={{ margin: 0 }}>
        © 2025 Able Forma Project. All rights reserved.
      </Footer>

      <style jsx global>{`
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
      `}</style>
    </Layout>
  );
};

export default App;
