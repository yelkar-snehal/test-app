import React from "react";
import { ToolkitTenantProvider } from "@centricsoftware/toolkit-tenant";
import { ChatPage } from "@centricsoftware/toolkit-tenant";

// Minimal mock store for testing
// const mockStore = {
//   getData: () => "Consumer app test data"
// };

export default function App() {
  return (
    <ToolkitTenantProvider runtimeUrl="http://127.0.0.1:4000/api/chat">
      <ChatPage onSubmitMessage={() => {}} user={{ id: "consumer" }} tools={
        <>
          {/* Place your tools/components here */}
        </>
      } />
    </ToolkitTenantProvider>
  );
}
