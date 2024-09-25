export function GuitarsNew ( {onCreate}) {
  const guitarSubmit = (event) => { 
    event.preventDefault();
    const params = new FormData(event.target);
    onCreate(params, () => event.target.reset());
  }
  return (
    <div>
      <h1>New Guitar</h1>
      <form onSubmit={guitarSubmit}>
        <div>
          Name: <input id='name' name='name' type='text'></input>
        </div>
        <div>
          Price: <input id='price' name='price' type='text' />
        </div>
        <div>
          Year: <input id='year' name='year' type='text' />
        </div>
        <div>
          image: <input id='image' name='image' type='text' />
        </div>
        <button type='submit'>Create Post</button>
      </form>
    </div>
  );
}