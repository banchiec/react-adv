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
	return (
		<div>
			<label>{label}</label>
		</div>
	)
}
export default MyTextInput
