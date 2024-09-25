export function GuitarsNew ( {onCreate}) {
  const guitarSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  }
  return (
    <div className="create">
      <h1>New Guitar</h1>
      <form onSubmit={guitarSubmit}>
        <div>
          Name: <input className='name' id='name' name='name' type='text'></input>
        </div>
        <div>
          Price: <input className='price' id='price' name='price' type='text' />
        </div>
        <div>
          Year: <input className='year' id='year' name='year' type='text' />
        </div>
        <div>
          image: <input className='images' id='image' name='image' type='text' />
        </div>
        <button type='submit'>Create Post</button>
      </form>
    </div>
  );
}