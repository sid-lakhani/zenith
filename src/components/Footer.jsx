import React from "react";
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center w-full border-t border-gray-300 px-1 py-2">
      <p className="text-sm text-gray-500 text-center flex-1">
        © {new Date().getFullYear()} zenith, Inc. All rights reserved.
      </p>
      <a
        href="https://github.com/sid-lakhani/zenith"
        className="text-gray-900 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
      >
        <Github size={36} />
      </a>
    </footer>
  );
}
