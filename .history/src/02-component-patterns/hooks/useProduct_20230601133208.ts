import { useState } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces'

interface useProductArgs {
	product: Product
	onChange?: (args: onChangeArgs) => void
	value?: number
}

const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
	const [counter, setCounter] = useState(value)
	console.log({ vlaue })

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0)
		setCounter(newValue)
		onChange && onChange({ count: newValue, product })
	}
	return { counter, increaseBy }
}
export default useProduct
