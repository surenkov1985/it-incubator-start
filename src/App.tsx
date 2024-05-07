import React from "react";
import styled from "styled-components";
import { Accordion } from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import { StyledBtn, SuperButton } from "./styledComponents/Buttons.styled";
import { StyledLink } from "./styledComponents/Link.styled";
import { Menu } from "./styledComponents/Menu.styled";

function App() {
	console.log("App rendering");
	return (
		<div>
			<Menu>
				<ul>
					<li>
						<a href="">Menu item 1</a>
					</li>
					<li>
						<a href="">Menu item 2</a>
					</li>
					<li>
						<a href="">Menu item 3</a>
					</li>
				</ul>
			</Menu>
			<Box>
				<StyledBtn btnType={"primary"} active>
					Hello
				</StyledBtn>
				<StyledBtn btnType={"outlined"} color="#043185">
					Hello
				</StyledBtn>
				{/* <StyledBtn as={"a"}>Link</StyledBtn>
				<StyledLink as={"a"}>Link</StyledLink>
				<SuperButton>SuperButton</SuperButton> */}
			</Box>

			{/* <PageTitle title={"This is App component"} />
			<Rating value={3} />
			<Accordion titleValue={"Меню"} collapsed={true} />
			<Accordion titleValue={"Users"} collapsed={false} />
			<Rating value={4} /> */}
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

const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	gap: 1.25rem;

	& button {
		cursor: pointer;
	}

	${StyledLink} {
		cursor: zoom-in;
	}

	@media screen and (max-width: 800px) {
		flex-direction: column;
	}
`;
