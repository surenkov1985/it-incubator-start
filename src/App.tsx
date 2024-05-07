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
			<Accordion titleValue={"Меню"} collapsed={true} />
			<Accordion titleValue={"Users"} collapsed={false} />
			<Rating value={4} />
		</div>
	);
}

type PageTitlePropsType = {
	title: string;
};

function PageTitle(props: PageTitlePropsType) {
	console.log("AppTitle rendering");

	return <h1>{props.title}</h1>;
}

export default App;
