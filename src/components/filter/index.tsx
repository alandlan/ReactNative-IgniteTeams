import { TouchableOpacityProps } from "react-native";

import { Container,Title,FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
}

export function Filter({ title, active = false, ...rest }: Props) {
    return (
        <Container active={active} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}
