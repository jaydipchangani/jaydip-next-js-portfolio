export default function NavBar() {
  return (
<nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-50% flex items-center justify-between p-5 bg-gray-900/60 backdrop-blur-md text-white z-50 rounded-xl shadow-lg">
  <div className="space-x-4">
    <a href="#home" className="hover:text-gray-400">Home</a>
    <a href="#about" className="hover:text-gray-400">About</a>
|
    <a href="#about" className="hover:text-gray-400"><button className="bg-blue-500 text-white mx-2 px-4 py-2 rounded hover:bg-blue-600 transition">
        Mode
        </button></a>
  </div>
</nav>

  );
}