import { css, styled } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

type StyledBtnPropsType = {
	color?: string;
	fontSize?: string;
	btnType?: "primary" | "outlined";
	active?: boolean;
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
	border: none;
	/* background-color: #fb5f78; */
	/* background-color: ${(props) => props.color || "#fb5f78"}; */
	/* border-radius: 15px; */
	/* color: snow; */
	padding: 12px 30px;
	font-size: ${(props) => props.fontSize || "1.375rem"};
	font-weight: 500;

	&:hover {
		background-color: #fb5f5f;
	}

	${(props) =>
		props.btnType === "outlined" &&
		css<StyledBtnPropsType>`
			border: 2px solid ${(props) => props.color || "#fb5f78"};
			color: ${(props) => props.color || "#fb5f78"};
			background-color: transparent;

			&:hover {
				background-color: transparent;
			}
		`}

	${(props) =>
		props.btnType === "primary" &&
		css<StyledBtnPropsType>`
			background: ${(props) => props.color || "#fb5f78"};
			color: snow;
		`}

        ${(props) =>
		props.active &&
		css<StyledBtnPropsType>`
			box-shadow: 5px 5px 5px 5px #fb5f7945;
		`}
`;

export const SuperButton = styled(StyledBtn)`
	border-radius: 1.5rem;
	background-color: #e2e626;
	color: #0c0c0c;

	&:hover {
	}
`;
