import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import image from '../assets/images.jpg'

export const Header = () => {
  const navigate = useNavigate();
  // 1. Menu open/close track karne ke liye state add ki
  const [isHidden, setIsHidden] = useState(true); 

  const handlesubmit =(e)=>{
    e.preventDefault();
    const query = e.target.search.value;

    if(query.trim()){
      navigate(`/search?q=${query}`);
      e.target.reset();
      setIsHidden(true); // Search karne ke baad mobile menu band karne ke liye
    }
  }

  const activeClass = "block py-2 px-3 text-heading  rounded md:border-0 md:hover:text-fg-brand max-md:bg-blue-500 max-md:text-white md:p-0 md:dark:hover:bg-transparent text-blue-500"
  const inactiveClass = "block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent "

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode && savedMode !== "undefined") {
      try {
        return JSON.parse(savedMode);
      } catch (e) {
        return true; 
      }
    }
    return true; 
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);


  return (
  <header>
    <nav className=" bg-white  dark:bg-gray-900 dark:text-white w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={image} className="h-7 rounded-2xl" alt="Flowbite Logo" />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">CineMate</span>
        </Link>
       
        <div  id='mobile-menu' className="flex items-center md:order-2 ">

        <button type="button" onClick={()=>setDarkMode(!darkMode)} className="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-foreground rounded-full hover:bg-surface-hover focus:outline-hidden focus:bg-surface-focus" data-hs-theme-click-value="dark">
          {darkMode ? ( <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>):( <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>)}
        </button>
        &nbsp; &nbsp;

          {/* 2. Mobile Search Icon pe onClick lagaya */}
          <button onClick={() => setIsHidden(!isHidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent box-border border border-transparent dark:text-gray-400 text-gray-500 hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none">
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
            <span className="sr-only">Search</span>
          </button>
     
          <label htmlFor="input-group-1" className="sr-only">Your Email</label>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-body dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
            </div>
            <form  onSubmit={handlesubmit} >
            <input type="text" id="input-group-1" name='search' className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search" />
            </form>
          </div>

          {/* 3. 3-Dot (Hamburger) icon pe onClick aur dark mode text lagaya */}
          <button onClick={() => setIsHidden(!isHidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary dark:text-gray-400" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
          </button>
        </div>

        {/* 4. Menu div ko isHidden se joda (yahan hidden class pehle hardcoded thi) */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isHidden ? "hidden" : ""}`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-body dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
            </div>
            <form onSubmit={handlesubmit}>
            <input type="text" id="input-group-1" name='search'  className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-2.5 py-2 shadow-xs placeholder:text-body dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search" />
            </form>
          </div>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* NavLinks par bhi onClick lagaya taaki click hote hi menu band ho jaye */}
            <li>
              <NavLink onClick={() => setIsHidden(true)} to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsHidden(true)} to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inactiveClass} >Popular</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsHidden(true)} to="movies/top" className={({ isActive }) => isActive ? activeClass : inactiveClass}>Top Rated</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setIsHidden(true)} to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inactiveClass}>UpComing</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}