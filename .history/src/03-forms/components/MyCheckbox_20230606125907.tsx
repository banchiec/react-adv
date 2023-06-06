import { useField } from 'formik'
import { type } from 'os'

interface Props {
	label: string
	name: string
	[x: string]: any
}

const MyTextInput = ({ label, ...props }: Props) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' })
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error && <span className="error">{meta.error}</span>}
		</>
	)
}
export default MyTextInput
