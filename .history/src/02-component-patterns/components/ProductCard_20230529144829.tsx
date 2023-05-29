import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { ProductTitle } from './ProductTitle'
import { ProductCardProps, ProductContextProps, Props } from '../interfaces/interfaces'
import { ProductImage } from './ProductImage'
import { ProductButtons } from './ProductButtons'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {
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
