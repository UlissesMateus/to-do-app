import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container, TasksContainer } from './styles';
import { tasks } from "../mocks/tasks";
import AddButton from '../components/AddButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { useState } from 'react';

export default function Main(){
    const [isDeleteModalVisible, setIsDeleteModalVisible ] = useState(false);

    function handleDeleteTask(task){
        setIsDeleteModalVisible(true);
    }
    function handleConfirmDeleteTask(){
        setIsDeleteModalVisible(false);
    }

    return(
        <Container>
            <Header />
            <TasksContainer>
                <Tasks tasks={tasks} 
                onDelete={handleDeleteTask}
                onConfirm={handleConfirmDeleteTask}
                />
            </TasksContainer>

            <AddButton onPress={()=> alert("chamar modal de criação de tarefa")} />

            <DeleteConfirmModal 
                visible={isDeleteModalVisible}
                onClose= {() => setIsDeleteModalVisible(false)}
                onConfirm={handleConfirmDeleteTask}
            />
        </Container>
    );
}