export default function Menu () {
  return (
    <main>
      <article className='w-svw h-svh '>
        <span>
          <img className='w-full' src='/comida.png' alt='Imagen del menu'/>
        </span>
        <section className='flex flex-col items-center justify-between bg-lime-700'>
          <h2>Marmitako</h2>
          <p className='text-center'>Una selección de pintxos tradicionales vascos, como tortilla de patatas, ibérico, anchoas en aceite, y más.</p>
          <p>12€</p>
        </section>
      </article>
    </main>
  )
}
