export function GuitarsIndex (props) { 
  return ( 
    <main>
      <h1>All Guitars!</h1>
      {props.guitars.map((guitar) => ( 
        <div key={guitar.id}>
          <h2>Name: {guitar.name}</h2>
          <h2>Price {guitar.price}</h2>
          <h2>Year: {guitar.year}</h2>
          <img src={guitar.image} />
        </div>
      ))}
    </main>
  );
}