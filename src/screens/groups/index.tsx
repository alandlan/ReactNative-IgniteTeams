import { Header } from '@components/header';
import {Container} from './styles';
import { Highlight } from '@components/highlight';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subTitle="Conheça os grupos disponíveis" />
    </Container>
  );
}
