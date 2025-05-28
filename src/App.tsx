import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';

function App() {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 p-4">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

export default App;