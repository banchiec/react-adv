import { useState } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces'

interface useProductArgs {
	product: Product
	onChange?: (args: onChangeArgs) => void
}

const useProduct = ({ onChange }: useProductArgs) => {
	const [counter, setCounter] = useState(0)
	const increaseBy = (value: number) => {
		setCounter((prev) => Math.max(prev + value, 0))
		onChange && onChange()
	}
	return { counter, increaseBy }
}
export default useProduct
