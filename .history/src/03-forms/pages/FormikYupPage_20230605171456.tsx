import { FormikErrors, useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface FormValues {
	firstName: string
	lastName: string
	email: ''
}

const FormikYupPage = () => {
	const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
		initialValues: {
			firstName: 'Fernando',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values)
		},
		validationSchema: Yup.object({
			firstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
		}),
	})
	return (
		<div>
			<h1>Formik Yup Tutorial</h1>
			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					onBlur={handleBlur}
					value={values.firstName}
					onChange={handleChange}
				/>
				{touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
				<label htmlFor="firstName">Last Name</label>
				<input
					type="text"
					name="lastName"
					onBlur={handleBlur}
					value={values.lastName}
					onChange={handleChange}
				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
				<label htmlFor="firstName">Email Address</label>
				<input
					type="email"
					name="email"
					onBlur={handleBlur}
					value={values.email}
					onChange={handleChange}
				/>
				{touched.email && errors.email && <span>{errors.email}</span>}
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
export default FormikYupPage
