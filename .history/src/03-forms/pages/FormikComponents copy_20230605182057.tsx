import { ErrorMessage, Field, Form, Formik, FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface FormValues {
	firstName: string
	lastName: string
	email: ''
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
				{(formik) => {
					;<Form>
						<Field name="firstName" type="text" />
						<ErrorMessage name="firstName" />

						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" />

						<Field name="email" type="email" />
						<ErrorMessage name="email" />
						// // <input
						// // 	type="text"
						// // 	name="firstName"
						// // 	onBlur={handleBlur}
						// // 	value={values.firstName}
						// // 	onChange={handleChange}
						// // />
						// // {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
						
						// <label htmlFor="firstName">Last Name</label>
						// <input
						// 	type="text"
						// 	name="lastName"
						// 	onBlur={handleBlur}
						// 	value={values.lastName}
						// 	onChange={handleChange}
						// />
						// {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
						// <label htmlFor="firstName">Email Address</label>
						// <input
						// 	type="email"
						// 	name="email"
						// 	onBlur={handleBlur}
						// 	value={values.email}
						// 	onChange={handleChange}
						// />
						// {touched.email && errors.email && <span>{errors.email}</span>}
						<button type="submit">Submit</button>
					</Form>
				}}
			</Formik>
		</div>
	)
}
export default FormikComponents
