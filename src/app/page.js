"use client";
import Image from "next/image";
import styles from "./page.module.css";
import useUser from "@/redux/hooks/useUser";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoggedIn, login, logout } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ name: "John Doe" });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  useEffect(() => {
    console.log(user);
  }, [isLoggedIn]);

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Freecodez Logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className={styles.btns}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className={styles.user}>
        {isLoggedIn ? (
          <p>
            Logged in as <strong>{user.name}</strong>
          </p>
        ) : (
          <p>Not logged in</p>
        )}
      </div>
    </main>
  );
}
