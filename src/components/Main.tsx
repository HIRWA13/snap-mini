import { ReactElement } from "react"
import mobileHero from "/mobileHero.png";
import Clients from "./Clients";
import heroImage from "../assets/imageherodesktop.png"

export default function Main():ReactElement {
  return (
    <main className="space-y-8 md:p-3 md:flex md:items-center md:justify-between md:w-4/5 md:mx-auto">
      <section className=" md:w-1/2 md:space-y-12">
        <section>
          <img src={mobileHero} className="md:hidden" />
        </section>
        <section className="p-3 mt-5 md:mt-0 flex flex-col items-center justify-center gap-3 md:items-start md:space-y-8">
          <h1 className="text-4xl text-dark text-center font-Epilogue font-bold md:text-8xl md:text-left">
            Make remote work
          </h1>
          <p className="px-2 text-gray font-Epilogue text-center md:text-left md:text-2xl">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-dark text-light py-3 px-7 rounded-xl font-Epilogue font-bold mt-2">
            Learn more
          </button>
        </section>
        <section className="px-4">
          <Clients />
        </section>
      </section>
      <img src={heroImage} className="hidden md:block md:w-1/3" />
    </main>
  );
}
