import { createContext, ReactElement } from 'react'
import useProduct from '../hooks/useProduct'
import { Product, ProductCardProps, ProductContextProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
	product: Product
	children: ReactElement | ReactElement[]
	className: string
}

export const ProductCard = ({ children, product, className }: ProductCardProps) => {
	const { counter, increaseBy } = useProduct()
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	)
}
