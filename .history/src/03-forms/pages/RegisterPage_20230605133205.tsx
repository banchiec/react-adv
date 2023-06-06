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
			<form noValidate onSubmit={onSubmit}>
				<input
					type="name"
					placeholder="name"
					name="name"
					value={formData.name}
					onChange={onChange}
				/>
				<input
					type="email"
					placeholder="email"
					name="email"
					value={formData.email}
					onChange={onChange}
				/>
				<input
					type="password1"
					placeholder="password1"
					name="password1"
					value={formData.password1}
					onChange={onChange}
				/>
			</form>
		</div>
	)
}
