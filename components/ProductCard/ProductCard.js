import css from './ProductCard.module.css'

const ProductCard = () => {
  return <div className={css.outerDiv}>
    <div className={css.innerDiv}>
        <div className={css.imgBox}></div>
        <div className={css.cardBdy}>
            <div className={css.cardTtl}></div>
            <div className={css.btns}></div>
        </div>
    </div>
  </div>
}

export default ProductCard