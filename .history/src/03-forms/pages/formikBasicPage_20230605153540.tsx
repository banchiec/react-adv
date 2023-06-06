import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
	firstName: string
	lastName: string
	email: ''
}

const FormikBasicPage = () => {
	const validate = ({firstName, lastName, email}:FormValues) => {
		const errors: FormikErrors<FormValues> = {}
			if(!firstName){
				errors.firstName = 'Required'
			}else if(firstName.length > 15) {
				errors.firstName = 'Must be 15 characters or less'
			}
			if(!lastName){
				errors.lastName = 'Required'
			}else if(lastName.length > 10) {
				errors.lastName = 'Must be 10 characters or less'
			}
		}
		return errors
	}
	const { handleChange, values, handleSubmit } = useFormik({
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
			<form noValidate onSubmit={handleSubmit}>
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
export default FormikBasicPage
