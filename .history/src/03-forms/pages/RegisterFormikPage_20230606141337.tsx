import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'
import { Formik } from 'formik'
import * as Yup from 'yup'
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
			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values)
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, 'Debe tener como mínimo 2 caracteres')
						.max(15, 'Debe tener como máximo 15 caracteres')
						.required('Requerido'),
				})}
			>
				{() => {}}
			</Formik>
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