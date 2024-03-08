import './App.css';

function App() {
  const flexItems = ['item1', '2', 'itemss3', '44item4', 'item5dasa'];
  return (
    <main>
      <section>
        <h1>1. Flex</h1>
        <section className='flexbox'>
          {flexItems.map((item, index) => (
            <div key={index} className='flexitem'>
              {item}
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
