/* Layout Route  */
import { Outlet } from '@remix-run/react';
import { LinksFunction } from '@remix-run/react/dist/routeModules';
import styles from 'highlight.js/styles/github-dark-dimmed.css';


export const links:LinksFunction = () =>{
    return [
        {
            rel:'stylesheet',
            href: styles,
        },
    ];
};

export default function  Blog(){
    return  <Outlet />;
}