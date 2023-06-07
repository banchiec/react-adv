import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup'

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}
for (const input of formJson) {
	initialValues[input.name] = input.value
	if (!input.validations) continue

	let schema = Yup.string()

	for (const rule of input.validations) {
		if (rule.type === 'required') {
			schema = schema.required('Este campo es requerido')
		}
		// ...others rulers
	}
	requiredFields[input.name] = schema
}
const validationSchema = Yup.object({ ...requiredFields })

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
					<Form noValidate>
						{formJson.map(({ type, name, label, placeholder, value, options }) => {
							if (type === 'input' || type === 'password' || type === 'email') {
								return (
									<MyTextInput
										key={name}
										name={name}
										label={label}
										placeholder={placeholder}
										type={type as any}
									/>
								)
							} else if (type === 'select') {
								return (
									<MySelect key={name} label={label} name={name}>
										<option value="">Select an option</option>
										{options?.map(({ id, label }) => (
											<option key={id} value={id}>
												{label}
											</option>
										))}
									</MySelect>
								)
							}
							return new Error(`El type ${type} no es soportado`)
						})}
						<button>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}
