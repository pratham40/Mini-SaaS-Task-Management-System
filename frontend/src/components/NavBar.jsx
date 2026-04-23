import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo / App Name */}
      <h1
        onClick={() => navigate("/dashboard")}
        className="text-xl font-semibold cursor-pointer text-blue-600"
      >
        TaskManager
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {token ? (
          <>
            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </button>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-gray-700 hover:text-blue-600"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
            >
              Signup
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
