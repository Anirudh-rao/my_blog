import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import type { LinksFunction } from "@remix-run/react/dist/routeModules";

export const links : LinksFunction = () =>{
  return [{ rel:"stylesheet", href:styles}];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rookr Blog App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
