import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
export const RegisterPage = () => {
	const { formData, onChange } = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	})

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}
	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={onSubmit}></form>
		</div>
	)
}
