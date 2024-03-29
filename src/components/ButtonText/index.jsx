import { Container } from "./style";

export function ButtonText({ title, isActive = false, ...rest }) {
	return (
		<Container {...rest} type="button" isActive={isActive}>
			{title}
		</Container>
	);
}
