export function GuitarsIndex ( { guitars } ) { 
  return ( 
    <main>
      <h1>All Guitars!</h1>
      {guitars.map((guitar) => ( 
        <div key={guitar.id}>
          <h2>Name: {guitar.name}</h2>
          <h2>Price {guitar.price}</h2>
          <h2>Year: {guitar.year}</h2>
          <img className='image' src={guitar.image} />
        </div>
      ))}
    </main>
  );
}