import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='navBar'>
        <div className='container'>
            <Link href='/'>       
                <a className='title'>OnlyFest</a>
            </Link>
            <ul>
                <li>
                    <Link href='/eventos'>
                        <a>Todos los eventos</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
