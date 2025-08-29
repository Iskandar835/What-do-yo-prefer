import ChoiceCard from "./components/CardChoice";

export default function App() {
  return (
    <main className="container">
      <section className="intro">
        <h1 className="app-title">Vous préférez quoi ?</h1>
        <p className="app-subtitle">
          Choisis entre deux options. Clique sur la carte que tu préfères.
          Aucune inscription, juste du fun.
        </p>
      </section>
      <section className="choice-card-container" aria-label="Zone de choix">
        <ChoiceCard
          imgSource="/src/assets/images/billet-100€.jpg"
          imgAlt="Billet de 100€"
          text="100€"
        />
        <ChoiceCard
          imgSource="/src/assets/images/billet-100€.jpg"
          imgAlt="Billet de 50€"
          text="50€"
        />
      </section>
    </main>
  );
}
