import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'
export const RegisterFormikPage = () => {
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
					email: Yup.string().email('El correo no tiene el formato válido').required('Requerido'),
					password1: Yup.string()
						.required('No password provided.')
						.min(8, 'Password is too short - should be 8 chars minimum')
						.matches(/[a-zA-Z]/, 'Password can only contain Latin letters'),
					password2: Yup.string()
						.oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
						.required('Requerido'),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput label="Name" name="name" placeholder="Iván" />
						<MyTextInput label="Email" name="email" placeholder="john@google.com" />
						<MyTextInput label="Password1" name="password1" type="password" />
						<MyTextInput label="Password2" name="password2" type="password" />
						<button type="submit">Create</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
