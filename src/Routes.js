
// --- Public Pages ------
import MethodsEdit from 'pages/Methods'
import Methods from 'pages/Methods/view'
import CompDoc from 'pages/ComponentDocument'

import AdminHome from 'pages/Home'

import Auth from "pages/Auth"
import NoMatch from 'pages/404';

export default [
	// -- Public -- //
	...Methods,
	CompDoc,
	// -- Authed -- //
	MethodsEdit,
	AdminHome,
	
	Auth,

	// -- Misc
	NoMatch
];
