import { FormEvent } from 'react';
export const RegisterPage = () => {
	const onSubmit = (event: FormEvent<HTMLFormElement) => {
	}
	return(
		<div>
			<h1>Register Page</h1>
			<form noValidate onSubmit={onSubmit}>
			</form>
		</div>
	)
}
