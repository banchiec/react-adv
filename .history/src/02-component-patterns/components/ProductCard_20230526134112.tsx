import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'

interface Props {
	product: Product
}

interface Product {
	id: string
	title: string
	img?: string
}

const ProductCard = () => {
	const { counter, increaseBy } = useProduct()
	return (
		<div className={styles.productCard}>
			<img className={styles.productImg} src="./coffee-mug.png" alt="coffee Mug" />
			<span className={styles.productDescription}>Coffee Mug</span>
			<div className={styles.buttonsContainer}>
				<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
					-
				</button>
				<label className={styles.countLabel}> {counter} </label>
				<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
					+
				</button>
			</div>
		</div>
	)
}
export default ProductCard
