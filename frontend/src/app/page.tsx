import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HomepageNotSignedIn() {
  return (
      <>
          <head>
              <title>ABQ CAR</title>
              <link rel="logo" href="/favicon.ico" />
          </head>
          <div className="grid grid-cols-2 p-6">
              <span>Hello neighbors! I hope that you aren't finding yourself in a situation to where you are stranded and desperately could use some help. If you did, that's okay! We got you covered! Take a look around and get connected with someone else local in Albuquerque to give you a hand by clicking on the Services tab and selecting which service fits your needs the best.</span>

          </div>
      </>
  );
}




