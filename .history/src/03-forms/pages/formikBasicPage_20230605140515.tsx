import '../styles/styles.css'
export const FormikBasicPage = () => {
	return (
		<div>
			<h1>Formik Basic Tutorial</h1>
			<form noValidate>
				<label htmlFor="firstName">First Name</label>
				<input type="text" name="firstName" />
			</form>
		</div>
	)
}
