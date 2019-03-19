//this a functional component for the footer

//importing the dependancies
import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Sarnava
    </footer>
  );
};