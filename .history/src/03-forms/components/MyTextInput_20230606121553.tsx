import { useField } from 'formik'

interface Props {
	lable: string
	name: string
	type?: 'text' | 'email' | 'password'
	placeholder?: string
	[x: string]: any
}

const MyTextInput = ({ label, ...props }: Props) => {
	const [field, meta] = useField(props)
	console.log(field)
	return (
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
		</div>
	)
}
export default MyTextInput
