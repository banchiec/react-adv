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
				{(handleOnChange) => (
					<Form>
						{formJson.map(({ type, name, label, placeholder }) => {
							return (
								<MyTextInput
									key={name}
									name={name}
									label={label}
									placeholder={placeholder}
									type={type as any}
									onChange={handleOnChange}
								/>
							)
						})}
					</Form>
				)}
			</Formik>
		</div>
	)
}