import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-blue-400">
      <a
        href="/"
        onClick={handleClick}
        className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-900"
      >
        Logout
      </a>
    </div>
  );
}
