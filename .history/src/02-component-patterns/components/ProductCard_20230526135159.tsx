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

export const ProductImage = ({ image = '' }) => {
	return <img className={styles.productImg} src={image ? image : noImage} alt="Product image" />
}

const ProductCard = ({ product }: Props) => {
	const { counter, increaseBy } = useProduct()
	return (
		<div className={styles.productCard}>
			<ProductImage image={product.img} />
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
