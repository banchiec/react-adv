import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import logo from '../logo.svg'
import { RegisterPage } from '../03-forms/pages/RegisterPage'
import FormikBasicPage from '../03-forms/pages/formikBasicPage'
import FormikYupPage from '../03-forms/pages/FormikYupPage'
import FormikComponents from '../03-forms/pages/FormikComponents copy'

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
							<NavLink to="/formik-basic" activeClassName="nav-active" exact>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-component" activeClassName="nav-active" exact>
								Formik yup
							</NavLink>
						</li>
						<li>
							<NavLink to="/formik-yup" activeClassName="nav-active" exact>
								Formik yup
							</NavLink>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
					<Route path="/formik-component">
						<FormikComponents />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
