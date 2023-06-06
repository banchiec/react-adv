import '../styles/styles.css'
export const FormikBasicPage = () => {
	return (
		<div>
			<h1>Formik Basic Tutorial</h1>
			<form noValidate>
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" />
				<label htmlFor="firstName">Last Name</label>
				<input type="text" name="firstName" />
				<label htmlFor="firstName">Email Address</label>
				<input type="email" name="firstName" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
