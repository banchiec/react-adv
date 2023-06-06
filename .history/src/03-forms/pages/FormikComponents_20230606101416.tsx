import { ErrorMessage, Field, Form, Formik, FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface FormValues {
	email: ''
	firstName: string
	jobType: ''
	lastName: string
	terms: false
}

const FormikComponents = () => {
	return (
		<div>
			<h1>Formik Component</h1>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
				}}
				onSubmit={(values) => {
					console.log(values)
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Debe de tener 15 caracteres o menos.')
						.required('Requerido'),
					lastName: Yup.string()
						.max(10, 'Debe de tener 10 caracteres o menos.')
						.required('Requerido'),
					email: Yup.string().email('El correo no tiene un formato válido.').required('Requerido'),
				})}
			>
				{(formik) => (
					<Form>
						<label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" />
						<ErrorMessage name="firstName" component="span" />

						<label htmlFor="firstName">Last Name</label>
						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="firstName">Email Address</label>
						<Field name="email" type="text" />
						<ErrorMessage name="email" component="span" />

						<label htmlFor="firstName">Terms and conditions</label>
						<Field name="terms" type="check" />
						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default FormikComponents
