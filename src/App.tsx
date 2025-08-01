import React from "react";
import { ToolkitTenantProvider, useToolkitTenantContext } from "@centricsoftware/toolkit-tenant";
import { ChatPage } from "@centricsoftware/toolkit-tenant";
import { CalendarMeetingFinder } from "@centricsoftware/toolkit-tenant/core";
import '@centricsoftware/toolkit-tenant/dist/style.css';

const TestContextComponent = () => {
  const value = useToolkitTenantContext();
  return <div style={{ color: "green", fontWeight: "bold" }}>ToolkitTenantContext value: {value}</div>;
};

// const a2aClient = createA2aClient("http://localhost:8080");

export default function App() {
  return (
    <ToolkitTenantProvider runtimeUrl="http://127.0.0.1:4000/api/chat" baseApiUrl="http://127.0.0.1:4000/api">
      <TestContextComponent />
      <ChatPage
        onSubmitMessage={() => {}}
        user={{ id: "consumer" }}
        tools={
          <>
            <CalendarMeetingFinder />
            {/* <A2aToolRenderer a2aClient={a2aClient} /> */}
          </>
        }
      />
    </ToolkitTenantProvider>
  );
}
