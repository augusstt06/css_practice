import '../css/layout/flex.css';

export default function Flex() {
  const flexItems = ['item1', '2', 'itemss3', '44item4', 'item5dasa'];
  return (
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
  );
}
