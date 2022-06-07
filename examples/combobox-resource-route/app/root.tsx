import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Reach UI Combobox + Resource Route",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

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
        <LiveReload port={Number(process.env.REMIX_DEV_SERVER_WS_PORT)} />
      </body>
    </html>
  );
}
