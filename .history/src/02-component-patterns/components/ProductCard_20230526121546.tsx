import styles from '../styles/styles.module.css'

const ProductCard = () => {
	console.log(styles)
	return (
		<div>
			<img className={styles.productImg} src="./coffee-mug-png" alt="coffee Mug" />
		</div>
	)
}
export default ProductCard
