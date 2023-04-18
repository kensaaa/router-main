import React from 'react'
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouterContext } from "./RouterApp";

const RoutesApp = () => {
	const { paths } = useContext(RouterContext);

	return (
		<Routes>
			{paths.map(({path, Element }) => (
				<Route key={path} path={path} element={<Element />} />
			))}

			<Route path="*" element={ <Navigate to={paths[0].path}/>} />
		</Routes>
	);
};

export { RoutesApp };
