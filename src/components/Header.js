// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4 flex flex-row justify-between pl-40 pr-40">
      <nav>
        <ul className="flex">
          <li className="mr-10 font-bold font-medium text-3xl">Reeco</li>
          <li className="mr-10 self-center">Store</li>
          <li className="mr-10 self-center">Orders</li>
          <li className="mr-10 self-center">Analytics</li>
          <li className="mr-10 self-center">Contact</li>
        </ul>
      </nav>
      <div className="self-center flex flex-row">
        <span className='mr-10'>Cart: 0 items</span>
        <span className=''>Hello Jhon</span>
      </div>
    </header>
  );
};

export default Header;
