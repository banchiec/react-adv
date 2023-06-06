import { createContext } from 'react'
import useProduct from '../hooks/useProduct'
import { InitialValues, onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'
import styles from '../styles/styles.module.css'
import { ProductCardHandlers } from '../../../.history/src/02-component-patterns/interfaces/interfaces_20230602162117';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
	product: Product
	// children: ReactElement | ReactElement[]
	children: (args. ProductCardHandlers) => JSX.Element
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
	const { counter, increaseBy, maxCount } = useProduct({ onChange, product, value, initialValues })
	return (
		<Provider
			value={{
				counter,
				increaseBy,
				maxCount,
				product,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children()}
			</div>
		</Provider>
	)
}
