import { ReactElement } from "react"
import mobileHero from "/mobileHero.png";
import Clients from "./Clients";

export default function Main():ReactElement {
  return (
    <main className="space-y-8">
      <section>
        <img src={mobileHero} />
      </section>
      <section className="p-3 mt-5 flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl text-dark text-center font-Epilogue font-bold">
          Make remote work
        </h1>
        <p className="px-2 text-gray font-Epilogue text-center">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-dark text-light py-3 px-4 rounded-xl font-Epilogue font-bold mt-2">
          Learn more
        </button>
      </section>
      <section className="px-4">
        <Clients />
      </section>
    </main>
  );
}
