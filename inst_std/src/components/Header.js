export default function Header() {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1>Quyl.</h1>
        <div className="flex items-center space-x-4">
          <button>🔔</button>
          <img src="/avatar.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
        </div>
      </header>
    );
  }
  