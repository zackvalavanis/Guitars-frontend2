export function GuitarsIndex ( { guitars, onShow} ) { 
  return ( 
    <main>
      <h1 className='title'>All Guitars!</h1>
      {guitars.map((guitar) => ( 
        <div className ='index' key={guitar.id}>
          <h2>Name: {guitar.name}</h2>
          <h2>Price {guitar.price}</h2>
          <h2>Year: {guitar.year}</h2>
          <img className='image' src={guitar.image} />
          <button onClick={() => onShow(guitar)}>More Info</button>
        </div>
      ))}
    </main>
  );
}