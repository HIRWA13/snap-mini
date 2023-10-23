import { ReactElement } from "react"
import mobileHero from "/mobileHero.png";
import Clients from "./Clients";
import heroImage from "../assets/imageherodesktop.png"

export default function Main():ReactElement {
  return (
    <main className="space-y-8 md:p-3 md:flex md:items-center md:justify-around md:w-4/5 md:mx-auto">
      <section className="space-y-10 md:w-1/2 md:space-y-24">
        <section>
          <img src={mobileHero} className="md:hidden" />
        </section>
        <section className="mt-5 space-y-2 md:mt-0 flex flex-col items-center justify-center gap-3 md:items-start md:space-y-6 md:p-0">
          <h1 className="text-4xl text-dark text-center font-Epilogue font-black md:text-7xl md:text-left md:pr-32">
            Make remote work
          </h1>
          <p className="px-4 text-gray font-Epilogue text-center md:text-left md:text-xl md:px-0 md:pr-20">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-dark text-light py-3 px-7 rounded-xl font-Epilogue font-bold mt-2">
            Learn more
          </button>
        </section>
        <section className="px-4 mt-3 md:mt-0 md:p-0">
          <Clients />
        </section>
      </section>
      <img src={heroImage} className="hidden md:block md:w-1/3" />
    </main>
  );
}
