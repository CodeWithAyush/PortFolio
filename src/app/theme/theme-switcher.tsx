"use client";
import { useTheme } from "next-themes";
import {} from "react-icons/fi"
import React, { useEffect, useState } from "react";

type Props = {};

const Switcher = ({}: Props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return <div>System</div>;
  if (resolvedTheme === "dark") {
    return <div onClick={() => {console.log("light");
     setTheme("light")}}>Dark</div>;
  }
  if (resolvedTheme === "light") {
    return <div onClick={() => {console.log("light");
        setTheme("dark")}}>light</div>;
  }
};

export default Switcher;
