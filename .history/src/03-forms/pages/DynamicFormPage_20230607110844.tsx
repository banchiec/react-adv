import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'

const initialValues: { [x: string]: string } = {}
for (const input of formJson) {
	initialValues[input.name] = input.value
}

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
						{formJson.map(({ type, name, label, placeholder, value }) => {
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
								return <MySelect key={name} label={label} name={name}></MySelect>
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
