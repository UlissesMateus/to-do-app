import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container, TasksContainer } from './styles';
import { tasks } from "../mocks/tasks";
import AddButton from '../components/AddButton';

export default function Main(){
    return(
        <Container>
            <Header />
            <TasksContainer>
                <Tasks tasks={tasks} />
            </TasksContainer>

            <AddButton onPress={()=> alert("chamar modal de criação de tarefa")} />
        </Container>
    );
}