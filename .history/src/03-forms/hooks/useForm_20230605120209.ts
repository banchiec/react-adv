import { useState } from 'react'

export const useForm = () => {
	const [registerData, setRegisterData] = useState({
		name: '',
		email: '',
		password1: '',
		password2: '',
	})
}
