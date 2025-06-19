import React, { useState } from "react";
import AdminInterface from "./components/AdminInterface";

const App = () => {
  // Set default page to 'admin' to render AdminInterface directly
  const [currentPage, setCurrentPage] = useState("admin");

  const renderPage = () => {
    switch (currentPage) {
      case "admin":
        return <AdminInterface onBack={() => setCurrentPage("admin")} />;
      // case 'workflow':
      //   return <WorkflowPage onBack={() => setCurrentPage('admin')} />;
      default:
        // Render AdminInterface as fallback
        return <AdminInterface onBack={() => setCurrentPage("admin")} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
};

export default App;
