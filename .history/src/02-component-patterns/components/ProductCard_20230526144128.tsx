import { ReactElement } from 'react'
import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import noImage from '../assets/no-image.jpg'
import { createContext } from 'vm'

interface Props {
	product: Product
	children?: ReactElement | ReactElement[]
}

interface Product {
	id: string
	title: string
	img?: string
}

interface ProductContextProps {
	counter: number
}

interface ProductButtonsProps {
	increaseBy: (value: number) => void
	counter: number
}

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext
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
export const ProductCard = ({ children, product }: Props) => {
	const { counter, increaseBy } = useProduct()
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={styles.productCard}>
				{children}
				{/* <ProductImage img={product.img} />
			<ProductTitle title={product.title} />
			<ProductButtons counter={counter} increaseBy={increaseBy} /> */}
			</div>
		</Provider>
	)
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons
