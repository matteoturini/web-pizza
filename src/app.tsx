import './app.scss'
import { Map } from './map'
import { Nav } from './nav'
import heroImg from './assets/hero.jpg'
import { CardapioAnchor } from './CardapioButton'

export function App() {
  return (
    <>
      <Nav />
      <main class="main">
        <div class="hero" style={{ backgroundImage: `url("${heroImg}")` }}>
          <h1>Pizzas deliciosas, na porta da sua casa.</h1>
        </div>
        <div class="center">
          <h1>Abra o nosso cardápio :</h1>
          <CardapioAnchor>Cardápio</CardapioAnchor>
        </div>
        <div class="split">
          <Map />
          <div>
            <h1>Venha !</h1>
            <strong>Endereço:</strong> <br />
            R. São João 613 <br />
            Quarta - Domingo <br />
            18h30 - 22h30 <br />
            <a href="tel:11910271967">(11) 91027-1967</a>
          </div>
        </div>
      </main>
      <footer>
        <span>Copyright © {new Date().getFullYear()} Todos os direitos reservados.</span>
      </footer>
    </>
  )
}
