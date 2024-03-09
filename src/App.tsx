import './css/flex.css';
import './css/grid.css';

function App() {
  const flexItems = ['item1', '2', 'itemss3', '44item4', 'item5dasa'];
  return (
    <article className='main'>
      <section className='flex-section'>
        <h1>1. Flex</h1>
        <section className='flexbox'>
          {flexItems.map((item, index) => (
            <div key={index} className='flexitem'>
              {item}
            </div>
          ))}
        </section>
        <section className='button-container'>
          <button className='login-button'>Login</button>
          <button className='login-button'>Sign up</button>
        </section>
      </section>
      <section>
        <h1>Grid</h1>
        <section className='grid-container'>
          <header>Header</header>
          <aside>Sidebar</aside>
          <main>Main content</main>
          <footer>Footer</footer>
        </section>
      </section>
    </article>
  );
}

export default App;
