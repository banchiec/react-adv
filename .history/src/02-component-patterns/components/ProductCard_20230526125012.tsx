import { useState } from 'react'
import styles from '../styles/styles.module.css'

const ProductCard = () => {
	const [counter, setcounter] = useState(0)
	return (
		<div className={styles.productCard}>
			<img className={styles.productImg} src="./coffee-mug.png" alt="coffee Mug" />
			<span className={styles.productDescription}>Coffee Mug</span>
			<div className={styles.buttonsContainer}>
				<button className={styles.buttonMinus}> - </button>
				<label className={styles.countLabel}> 0 </label>
				<button className={styles.buttonAdd}> + </button>
			</div>
		</div>
	)
}
export default ProductCard
