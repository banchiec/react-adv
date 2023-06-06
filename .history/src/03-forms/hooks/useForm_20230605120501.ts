import { ChangeEvent, FormEvent, useState } from 'react'

export const useForm = () => {
	const [registerData, setRegisterData] = useState({
		name: '',
		email: '',
		password1: '',
		password2: '',
	})
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
