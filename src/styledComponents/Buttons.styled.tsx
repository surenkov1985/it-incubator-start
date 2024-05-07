import { styled } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

export const StyledBtn = styled.button`
	border: none;
	background-color: #fb5f78;
	/* border-radius: 15px; */
	color: snow;
	padding: 12px 30px;
	font-size: 1.375rem;
	font-weight: 500;

	&:hover {
		background-color: #fb5f5f;
	}

	&:last-child {
		background-color: #5ffb5f;
	}
`;

export const SuperButton = styled(StyledBtn)`
	border-radius: 1.5rem;
	background-color: #e2e626;
	color: #0c0c0c;

	&:hover {
		animation: ${MyAnimation} 2s ease-in-out;
	}
`;
