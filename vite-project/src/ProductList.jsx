import React from 'react'
import JsonData from './JsonData'
import Products from './Products';

let image, title, para, id;
const Flowerinfo = (value) => {
  id = value.id;
  image = value.image;
  name = value.name
  title = value.title;
  para = value.para;

}
function ProductList() {
  return (
    <div>
     {

        JsonData.map(Flowerinfo)
      }
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>

        {
          JsonData.map((card) => (
            <Products image={card.image} name={card.name} title={card.title} para={card.para} key={card.id} />
          ))}
      </div> 
    </div>
  )
}

export default ProductList
