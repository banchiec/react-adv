import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import {
	RegisterPage,
	FormikBasicPage,
	FormikAbstraction,
	FormikYupPage,
	FormikComponents,
	RegisterFormikPage,
} from '../03-forms/pages'

export const Navigation = () => {
	return (
		<Router>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React Logo" />
					<ul>
						<li>
							<NavLink to="/register" activeClassName="nav-active" exact>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink to="/register-formik-abstraction" activeClassName="nav-active" exact>
								Register Formik
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-basic" activeClassName="nav-active" exact>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-yup" activeClassName="nav-active" exact>
								Formik yup
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-components" activeClassName="nav-active" exact>
								Formik component
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-abstraction" activeClassName="nav-active" exact>
								Formik Abstraction
							</NavLink>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/register">
						<RegisterPage />
					</Route>
					<Route path="/formik-basic">
						<FormikBasicPage />
					</Route>
					<Route path="/formik-yup">
						<FormikYupPage />
					</Route>
					<Route path="/formik-components">
						<FormikComponents />
					</Route>
					<Route path="/formik-abstraction">
						<FormikAbstraction />
					</Route>
					<Route path="/register-formik-abstraction">
						<RegisterFormikPage />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
