import Grid from "./components/Grid";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

/** Components are just functions that return jsx via html code we write JavaScript in.*/
function App() {
  return (

    <Layout>
      <main>
        <Hero />
        <Grid />
      </main>
    </Layout>
  )
}

export default App
