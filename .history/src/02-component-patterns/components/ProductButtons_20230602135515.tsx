import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import { InitialValues } from '../interfaces/interfaces'

export interface Props {
	className?: string
	style?: React.CSSProperties
	initialValues?: InitialValues
}

export const ProductButtons = ({ className, style, initialValues }: Props) => {
	const { increaseBy, counter } = useContext(ProductContext)
	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}> {initialValues?.count || counter} </div>
			<button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
				+
			</button>
		</div>
	)
}
