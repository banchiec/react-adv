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

interface ProductButtonsProps {
	increaseBy: (value: number) => void
	counter: number
}

export const ProductImage = ({ img = '' }) => {
	return <img className={styles.productImg} src={img ? img : noImage} alt="Product_image" />
}

export const ProductTitle = ({ title }: { title: string }) => {
	return <span className={styles.productDescription}>{title}</span>
}

export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => {
	return (
		<div className={styles.buttonsContainer}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<label className={styles.countLabel}> {counter} </label>
			<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
				+
			</button>
		</div>
	)
}
const ProductCard = ({ product }: Props) => {
	const { counter, increaseBy } = useProduct()
	return (
		<div className={styles.productCard}>
			<ProductImage img={product.img} />
			<ProductTitle title={product.title} />
			<ProductButtons counter={counter} increaseBy={increaseBy} />
			{/* <div className={styles.buttonsContainer}>
				<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
					-
				</button>
				<label className={styles.countLabel}> {counter} </label>
				<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
					+
				</button>
			</div> */}
		</div>
	)
}
export default ProductCard
