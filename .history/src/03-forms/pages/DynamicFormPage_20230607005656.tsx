import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components'

const initialValues: { [x: string]: string } = {}

export const DynamicFormPage = () => {
	console.log(formJson)
	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={() => {
					console.log(formJson)
				}}
			>
				{() => (
					<Form>
						{formJson.map(({ type, name, label, placeholder, value }) => {
							return (
								<MyTextInput
									key={name}
									name={name}
									label={label}
									placeholder={placeholder}
									type={type as any}
								/>
							)
						})}
					</Form>
				)}
			</Formik>
		</div>
	)
}
