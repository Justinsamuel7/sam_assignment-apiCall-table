import React, { useState } from 'react';
import './style.css';
import TableShow from './TableShow'

export default function HomePage() {
  const [page, setPage] = useState(0);

  const changePage = (num) => {
    setPage(num);
    subComponent()
  };

  const subComponent = () => {
    if (page === 1){
      localStorage.clear()
      window.location.reload();
    }
 
  };

  return (
    <div>
      {/* <div>Dashboard</div> */}
      <h1 id="homepageheading">Home Page</h1>
      <div id="nav">
        <button>Home</button>
        <button>Career</button>
        <button>About us</button>
        <button>Contact</button>
        <button onClick={() => changePage(1)}>Log out</button>

      </div>
      <div id="subComponent"><TableShow/></div>
    </div>
  );
}
