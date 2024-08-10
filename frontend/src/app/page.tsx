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
          <div className="text-xl text-center">
              Short on time and need transportation assistance? Don't worry, we've got you covered!
          </div>
      </>
  );
}




