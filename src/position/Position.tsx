import '../css/position/position.css';

export default function Position() {
  return (
    // <section className='display'>
    //   <div className='display-static'>position: static</div>
    //   <div className='display-relative'>position: relative</div>
    //   <div className='display-absolute'>position: absolute</div>
    // </section>
    <section className='sticky'>
      <section className='sticky-slide' id='s1'>
        First Slide
      </section>
      <section className='sticky-slide' id='s2'>
        Second Slide
      </section>
      <section className='sticky-slide' id='s3'>
        Third Slide
      </section>
    </section>
  );
}
