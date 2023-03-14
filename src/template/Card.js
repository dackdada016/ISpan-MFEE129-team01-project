import photo from '../img/productDetails/cheese.jpg'
// { photo }帶入參數
// function Card({photo}) {
import { AddToCartLg, MoreSquare, AddToFavoritesLg } from './index'

function Card({ product, typeID }) {
  // eslint-disable-next-line prettier/prettier
  [product].forEach((product) => {
    console.log('product.product_image', product.product_image)
    const img = product.product_image.split(',')
    const bigImage = img[0]
    product.product_img = bigImage
    console.log('data', product)
  })
  const {
    product_id,
    product_name,
    product_class,
    product_price,
    product_descripttion,
    product_image,
  } = product

  return (
    <div className="productCard col-4 m-auto">
      <span hidden>{product_id}</span>
      {/* <section className="text-part"> */}
      <h2 className="title">{product_name}</h2>
      <span hidden>{product_class}</span>
      <p className="description">{product_descripttion}</p>
      <span className="price">NT. {product_price}</span>
      {/* </section> */}
      <section className="buttons">
        <button className="button-collection">
          <AddToFavoritesLg product={product} typeID={typeID} />
        </button>
        <MoreSquare product_id={product_id} typeID={typeID} />
        {/* <MoreSquare typeID={typeID} product_id={product_id} /> */}
      </section>
      <AddToCartLg product={product} />
      {/* 圖片動態引入 ，圖片須放在public資料夾*/}
      <img src={`http://localhost:3002/${product_image}`} alt="" />
      {/* <img src={'http://localhost:3000/' + photo} alt="" /> */}
      {/* <img src={photo} alt="" /> */}
    </div>
  )
}
export default Card
