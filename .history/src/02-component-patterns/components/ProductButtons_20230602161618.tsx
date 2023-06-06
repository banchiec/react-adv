import { useContext, useCallback } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface Props {
	className?: string
	style?: React.CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
	//TODO: maxCount
	const { increaseBy, counter, maxCount } = useContext(ProductContext)

	//TODO: isMaxReached = useCallback, dependencias [count, maxCount]
	useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount])
	// TRUE si el count  === maxCount
	// false si no lo es
	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}> {counter} </div>
			<button className={`${styles.buttonAdd} ${styles.disabled}`} onClick={() => increaseBy(+1)}>
				+
			</button>
		</div>
	)
}