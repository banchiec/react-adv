import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import MyTextInput from '../components/MyTextInput'

// interface FormValues {
// 	email: ''
// 	firstName: string
// 	jobType: ''
// 	lastName: string
// 	terms: false
// }

const FormikAbstraction = () => {
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
					terms: Yup.boolean().oneOf([true], 'Debe de aceptar la condiciones'),
					jobType: Yup.string().notOneOf(['it-jr'], 'Esta opción no es permitida').required(),
				})}
			>
				{(formik) => (
					<Form>
						<MyTextInput label="First Name" name="firstName" placeholder="Fernando" />
						<MyTextInput label="Last Name" name="lasttName" placeholder="Herrera" />
						<MyTextInput label="Email Address" name="email" placeholder="jonh@google.com" />
						{/* <label htmlFor="firstName">First Name</label>
						<Field name="firstName" type="text" />
						<ErrorMessage name="firstName" component="span" />

						<label htmlFor="firstName">Last Name</label>
						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" component="span" />

						<label htmlFor="firstName">Email Address</label>
						<Field name="email" type="text" />
						<ErrorMessage name="email" component="span" /> */}

						<label htmlFor="jobType">Job Type</label>
						<Field name="jobType" as="select">
							<option value="">Pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-jr">IT Jr</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />

						<label>
							<Field name="terms" type="checkbox" />
							Terms and conditions
						</label>
						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default FormikAbstraction