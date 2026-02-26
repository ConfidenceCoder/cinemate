    import React from 'react'
    import { Link ,NavLink} from 'react-router-dom'
    export const Footer = () => {
    return (
        

    <footer className="bg-neutral-primary-soft dark:bg-gray-900 dark:text-mauve-500 inset-x-0 bottom-0 rounded-base shadow-xs border border-default mt-4">
        <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-body sm:text-center">© 2023 <NavLink to="/" className="hover:underline">Flowbite™</NavLink>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
            <li>
                <Link to="#" className="hover:underline me-4 md:me-6">Instagram</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline me-4 md:me-6">Youtube</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline me-4 md:me-6">Linkdin</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline">Facebook</Link>
            </li>
        </ul>
        </div>
    </footer>

    )
    }
