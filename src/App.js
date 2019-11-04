import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: 'Coconut Water',
    image: 'http://g.search.alicdn.com/img/bao/uploaded/i4/i1/2436572716/O1CN01uoK38a1VvyBsThqrQ_!!0-item_pic.jpg',
    description: 'Well known as great drinks invented a hundred years age, Yeshu Coconut milk severs you the authetic taste of earth when you travel in universe.',
    price: '100 Marscoin',
    promoSentence: 'You cannot live without it'
  },
  {
    item: 'Coconut Chicken',
    image: 'https://www.getreadyhk.com/images/stories/blog/mrmrsfoodhk/runyuan/runyuan_04.JPG',
    description: 'Followed by coconut water, coconut chicken is also recognized as one of the greatest food in 2020s, you donnot want to miss it during your Mars trip',
    price: '258 Marscoin',
    promoSentence: 'Bring intangible heritage to Mars'
  },
  {
    item: 'War and Peace',
    image: 'https://images4.penguinrandomhouse.com/cover/9781400079988',
    description: 'War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature',
    price: '999 Marscoin',
    promoSentence: 'Reading helps you to sleep well during the long trip'
  },
  
  {
    item: 'NYU Shanghai Sticker',
    image: 'https://media1.giphy.com/media/j0GSxl5cuQKp3Rtmt1/source.gif',
    description: 'This sticker gives you comfort and reminds you of great experience of NYU Shanghai although the school does not exist anymore',
    promoSentence: 'Long Live NYUSH',
    price: '1000 Marscoin'
  },
]

function App() {
  return (
    <div className="App">
      <h1 className="heading">Life Essentials</h1>
     {/* <SearchForm /> */}
     <ShoppingCart />
     <div className="note">
     <p>Inspired by Yeshu Coconut</p>
     <p>
       Marscoin: Marscoin is a cryptocurrency. It is a decentralized digital currency that are used UNIVERSALLY.
     </p>
     </div>
     
    </div>
  );
}

function ShoppingCart() {
  return(
    shoppingCartItems.map(product)
  );
}

function product(a) {
  return(
    <div className="product">
      <div>
      <img src={a.image} width="100"/>
      <p className="nameOfProduct"> {a.item}</p>
      <p className="description"> {a.description}</p>
      <p className="promoSentence"> {a.promoSentence}</p>
      <p className="price">{a.price}</p>
      </div>
    </div>
  )
}

function SearchForm() {
  return(
    <form>
      <label>
        Search:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default App;
