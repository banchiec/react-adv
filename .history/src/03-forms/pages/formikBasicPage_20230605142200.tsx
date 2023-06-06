import { useFormik } from 'formik'
import '../styles/styles.css'
export const FormikBasicPage = () => {
	const { handleChange, values } = useFormik({
		initialValues: {
			firstName: 'Fernando',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values)
		},
	})
	return (
		<div>
			<h1>Formik Basic Tutorial</h1>
			<form noValidate>
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" value={values.firstName} onChange={handleChange} />
				<span>First Name is required</span>
				<label htmlFor="firstName">Last Name</label>
				<input type="text" name="firstName" value={values.lastName} onChange={handleChange} />
				<span>Last Name is required</span>
				<label htmlFor="firstName">Last Name</label>
				<label htmlFor="firstName">Email Address</label>
				<input type="email" name="firstName" value={values.email} onChange={handleChange} />
				<span>Email is required</span>
				<span>Check for an valid email format</span>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
