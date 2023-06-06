import { useState } from 'react'

const useProduct = (onChange: () => void) => {
	const [counter, setCounter] = useState(0)
	const increaseBy = (value: number) => {
		setCounter((prev) => Math.max(prev + value, 0))
		onChange()
	}
	return { counter, increaseBy }
}
export default useProduct
