import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import noImage from '../assets/no-image.jpg'

interface Props {
	product: Product
}

interface Product {
	id: string
	title: string
	img?: string
}

export const ProductImage = ({ img = '' }) => {
	return <img className={styles.productImg} src={img ? img : noImage} alt="Product image" />
}

const ProductCard = ({ product }: Props) => {
	const { counter, increaseBy } = useProduct()
	return (
		<div className={styles.productCard}>
			{/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffee Mug" /> */}
			<ProductImage img={product.img} />
			{/* <img className={styles.productImg} src={product.img ? product.img : noImage} alt="coffee Mug" /> */}
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
