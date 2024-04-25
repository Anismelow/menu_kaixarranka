import { Categoria } from './Categoria'
import Header from './Header'
import PlatoMenu from './PlatoMenu'

export default function Menu () {
  return (
    <main className='w-full h-auto flex justify-end px-8 box-border'>
      <article className='w-3/4 h-svh flex flex-col justify-center'>
      <Header />
      <Categoria />
      <PlatoMenu />
      <PlatoMenu />
      <PlatoMenu />
      <PlatoMenu />
      </article>
    </main>
  )
}
