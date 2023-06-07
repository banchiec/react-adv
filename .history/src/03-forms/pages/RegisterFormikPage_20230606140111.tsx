import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'
export const RegisterFormikPage = () => {
	const { formData, onChange, name, email, password1, password2, isValidEmail } = useForm({
		name: '',
		email: '',
		password1: '',
		password2: '',
	})

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(formData)
	}
	return (
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={onSubmit}>
				<input type="name" placeholder="name" name="name" value={name} onChange={onChange} />
				<input type="email" placeholder="email" name="email" value={email} onChange={onChange} />
				{!isValidEmail(email) && <span>Email no es válido</span>}
				<input
					type="password1"
					placeholder="password1"
					name="password1"
					value={password1}
					onChange={onChange}
				/>
				<input
					type="password2"
					placeholder="password2"
					name="password2"
					value={password2}
					onChange={onChange}
				/>
				<button type="submit">Create</button>
			</form>
		</div>
	)
}
