import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'

export const DynamicFormPage = () => {
	console.log(formJson)
	return (
		<div>
			<Formik initialValues={formJson}>
				{(formik) => {
					;<span>Hola mundo</span>
				}}
			</Formik>
		</div>
	)
}
