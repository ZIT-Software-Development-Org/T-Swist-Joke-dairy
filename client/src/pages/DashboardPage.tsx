import { useState } from "react";
import { Menu, Search } from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-36"
        } bg-gray-900 p-4 transition-all duration-300`}
      >
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="mb-4">
          <Menu className="w-6 h-6" />
        </button>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block hover:text-blue-500">
            Comedians
          </a>
          <a href="#" className="block hover:text-blue-500">
            Videos
          </a>
          <a href="#" className="block text-blue-500">
            Jokes
          </a>
          <a href="#" className="block hover:text-blue-500">
            Magazine
          </a>
          <a href="#" className="block hover:text-blue-500">
            Legacy
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-gray-800 p-4">
          <h1 className="text-xl font-bold">Joke Joke </h1>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-orange-500" />
            <a href="#" className="text-gray-300 hover:text-white">
              Clubs & Tickets
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contests
            </a>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">Welcome to the Dashboard</h2>
            <p className="text-gray-400">Manage your content and view insights here.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
