export function GuitarsShow ( { guitar, onUpdate, onDestroy } ) { 
  const guitarSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(guitar.id, params, () => event.target.reset());
  }

  return ( 
    <div>
      <p>Name: {guitar.name}</p> 
      <p>price: {guitar.price}</p> 
      <p>year: {guitar.year}</p> 
      <form onSubmit={guitarSubmit}>
        <div>
          Name: <input defaultValue={guitar.name} name='name' type='text' />
        </div>
        <div>
          Price: <input defaultValue={guitar.price} name='price' type='text' />
        </div>
        <div>
          Year: <input defaultValue={guitar.year} name="year" type='text' />
        </div>
        <div>
          Image: <input defaultValue={guitar.image} name='image' type='text' />
        </div>
        <button type='submit'>Update</button>
      </form>
      <button onClick={() => onDestroy(guitar.id)}>Delete</button>
    </div>
  )
}
