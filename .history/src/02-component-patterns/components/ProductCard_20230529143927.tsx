import { useContext, createContext } from 'react'
import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { ProductTitle } from './ProductTitle'
import { ProductContextProps } from '../interfaces/interfaces'

const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductButtons = () => {
	const { increaseBy, counter } = useContext(ProductContext)
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
