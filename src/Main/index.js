import Header from '../components/Header';
import Tasks from '../components/tasks';
import { Container, TasksContainer } from './styles';

export default function Main(){
    return(
        <Container>
            <Header />
            <TasksContainer>
                <Tasks/>
            </TasksContainer>
        </Container>
    );
}