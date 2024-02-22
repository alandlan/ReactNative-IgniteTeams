import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/groupcard';
import {Container} from './styles';

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Grupos" subTitle="Conheça os grupos disponíveis" />
      <GroupCard title="Grupo de Estudos" />
    </Container>
  );
}
