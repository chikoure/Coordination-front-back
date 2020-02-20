import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './Routes';

function App() {
  // let myAge = 18;
  // let myName = 'vincent';
  // const sayMyName = (name) => {
  //   return <h1>mon nom est {name}</h1>;
  // };
  // const sayMyAge = (age) => {
  //   return age > 18 ? <h3> j'ai {age}</h3> : <h3> je suis mineur</h3>;
  // };
  // const products = [
  //   { name: 'air force', brand: 'nike' },
  //   { name: 'reebok', brand: 'reebok' }
  // ];
  // const displayProducts = (products) => {
  //   return products.map((product, index) => {
  //     return <p key={index}>{product.name}</p>;
  //   });
  // };

  return (
    <div className='App'>
      <Header />
      <Routes />
      <Footer />
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{myName}</p>
        <p>{sayMyAge(myAge)}</p>
        <div className='product_list'>
          {displayProducts(products)}
          {products.map((product) => (
            <p>{product.name}</p>
          ))}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
