import React from 'react';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <Link
        to="/login"
        className="text-indigo-600 hover:text-indigo-500 font-medium"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="text-indigo-600 hover:text-indigo-500 font-medium"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AuthNav; 