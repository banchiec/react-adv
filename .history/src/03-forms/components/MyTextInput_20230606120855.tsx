import { useField } from 'formik'

interface Props {
	lable: string
	name: string
	type?: 'text' | 'email' | 'password'
	placeholder?: string
	[x: string]: any
}

const MyTextInput = () => {
	const [] = useField()
	return (
		<div>
			<h1>Input</h1>
		</div>
	)
}
export default MyTextInput
