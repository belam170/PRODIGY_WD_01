import React from 'react';

function Home() {
  return (
    <div>
      <section className='home-section'>
        <div className="text-content">
          <h1 style={{ marginBottom: '10px' }}>Most Ordered in Summer Season</h1>
          <h2 style={{ marginTop: '0', marginBottom: '5px' }}>Jumbo burger</h2>
          <p style={{ margin: '0' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, consequuntur dolor iusto fuga veniam sed. Voluptatem facilis facere laboriosam repudiandae tempore, obcaecati voluptates veniam, nam dignissimos atque consequuntur ut rerum!
          </p>
          <div className="btn">
          <button className="btn">Order now</button>
          <button className="btn">Explore More</button>
          </div>
      
        </div>
        <div className="image-section">
          <img src="images/ham3.jpeg" alt="" />
          <div className="shadow"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
