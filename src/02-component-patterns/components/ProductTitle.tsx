import { useContext } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard'

export interface Props {
	title?: string
	className?: string
	style?: React.CSSProperties
}

export const ProductTitle = ({ title, className, style }: Props) => {
	const { product } = useContext(ProductContext)
	return (
		<span className={`${styles.productDescription} ${className}`} style={style}>
			{title ? title : product.title}
		</span>
	)
}
