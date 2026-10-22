{/* 15. Create a simple Login/Logout interface using useState. Display "Welcome User" when logged in and "Please Login" when logged out. The button text should change accordingly. */}

import { useState } from "react";

export default function Log() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="rounded-xl bg-white py-20 px-32 text-center shadow-lg">
        <p className="mb-6 text-black text-2xl font-semibold">{loggedIn ? "Welcome User" : "Please Login"}</p>

        <button onClick={() => setLoggedIn(!loggedIn)} className="rounded-lg px-6 py-2 font-semibold text-white bg-blue-700">{loggedIn ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
}