import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Digital twin project</p>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
