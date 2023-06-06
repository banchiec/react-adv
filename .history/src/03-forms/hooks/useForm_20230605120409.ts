import { FormEvent, useState } from 'react'

export const useForm = () => {
	const [registerData, setRegisterData] = useState({
		name: '',
		email: '',
		password1: '',
		password2: '',
	})
	const onChange = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}
	return {
		onChange,
	}
}
