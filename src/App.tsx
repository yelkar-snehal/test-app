import React from "react";
import { ToolkitTenantProvider, useToolkitTenantContext } from "@centricsoftware/toolkit-tenant";
import { ChatPage } from "@centricsoftware/toolkit-tenant";
// Consumer app's main file
import '@centricsoftware/toolkit-tenant/dist/style.css';


// Minimal mock store for testing
// const mockStore = {
//   getData: () => "Consumer app test data"
// };

const TestContextComponent = () => {
  const value = useToolkitTenantContext();
  return <div style={{ color: "green", fontWeight: "bold" }}>ToolkitTenantContext value: {value}</div>;
};

export default function App() {
  return (
    <ToolkitTenantProvider runtimeUrl="http://127.0.0.1:4000/api/chat">
      <TestContextComponent />
      <ChatPage onSubmitMessage={() => {}} user={{ id: "consumer" }} tools={
        <>
          {/* Place your tools/components here */}
        </>
      } />
    </ToolkitTenantProvider>
  );
}
