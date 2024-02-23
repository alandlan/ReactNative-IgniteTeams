import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {
}

export function ButtonIcon({ ...rest }: Props) {
    return (
        <Container {...rest} >
            <Icon name="home" type='PRIMARY' />
        </Container>
    );
}