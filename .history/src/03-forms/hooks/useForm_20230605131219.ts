import { ChangeEvent, FormEvent, useState } from 'react'

export const useForm = <T>(initialState: T) => {
	const [registerData, setRegisterData] = useState(initialState)
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setRegisterData((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}
	return {
		registerData,
		onChange,
	}
}
