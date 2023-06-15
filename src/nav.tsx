import './nav.scss'
import { CardapioAnchor } from './CardapioButton'

export function Nav() {
  return (
    <>
      <nav class="nav flex">
        <h1>Pizzaria</h1>
        <div class="spacer"></div>
        <CardapioAnchor>Cardápio</CardapioAnchor>
        <a href="#" class="button">Delivery</a>
      </nav>
    </>
  )
}
