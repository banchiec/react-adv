import { createContext, ReactElement } from 'react'
import useProduct from '../hooks/useProduct'
import { InitialValues, onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'
import { InitialValues } from '../../../.history/src/02-component-patterns/interfaces/interfaces_20230602133638'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
	product: Product
	children: ReactElement | ReactElement[]
	className?: string
	style?: React.CSSProperties
	onChange?: (args: onChangeArgs) => void
	value?: number
	initialValues?: InitialValues
}

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues,
}: Props) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value })
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	)
}