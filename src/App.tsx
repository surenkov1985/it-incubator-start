import React from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

function App() {
	console.log("App rendering");
	return (
		<div>
			<PageTitle title={"This is App component"} />
			<Rating value={3} />
			<Accordion title={"Меню"} />
			<Rating value={4} />
		</div>
	);
}

function PageTitle(props: any) {
	console.log("AppTitle rendering");

	return <h1>{props.title}</h1>;
}

export default App;
