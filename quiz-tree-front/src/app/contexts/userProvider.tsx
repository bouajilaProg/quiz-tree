"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export const userContext = React.createContext<{ user: any, setUser: (user: any) => void }>({
  user: null,
  setUser: () => { },
});

function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const token = localStorage.getItem("token");
      if (token) {
        axios
          .post("http://localhost:4000/auth/me", { token })
          .then((res) => setUser(res.data.user))
          .catch((err) => console.log(err));
      }
    }
  }, [mounted]);

  return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>;
}

export default UserProvider;
