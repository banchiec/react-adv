import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components'

export const DynamicFormPage = () => {
	console.log(formJson)
	return (
		<div>
			<Formik
				initialValues={formJson}
				onSubmit={() => {
					console.log(formJson)
				}}
			>
				{(formik) => (
					<Form>
						{formJson.map(({ type, name, label, placeholder }) => {
							return <MyTextInput key={field.name} name={field.name} label={field.label} />
						})}
					</Form>
				)}
			</Formik>
		</div>
	)
}
