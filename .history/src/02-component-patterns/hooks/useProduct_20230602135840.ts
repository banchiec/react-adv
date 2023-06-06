import { useEffect, useState, useRef } from 'react'
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces'

interface useProductArgs {
	product: Product
	onChange?: (args: onChangeArgs) => void
	value?: number
	initialValues?: InitialValues
}

const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value)
	const isMounted = useRef(false)

	const increaseBy = (value: number) => {
		const newValue = Math.max(counter + value, 0)
		setCounter(newValue)
		onChange && onChange({ count: newValue, product })
	}
	useEffect(() => {
		setCounter(value)
	}, [value])
	return { counter, increaseBy }
}
export default useProduct
