import React, { createContext, ReactElement } from "react"
import { BrowserRouter } from "react-router-dom"
import { PathApp } from "../interface"

interface RouterAppProps {
	children: ReactElement | ReactElement[]
	paths: PathApp[]
}

interface ContexRouterProps{
	paths: PathApp[]
}

export const RouterContext = createContext({} as ContexRouterProps)
const {Provider} = RouterContext


const RouterApp = ({children,paths}:RouterAppProps) => {
	return (
		<Provider value={{paths}}>
			<BrowserRouter>
				{children}
			</BrowserRouter>
		</Provider>
	)
}

export {RouterApp}

