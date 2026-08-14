import TarefasItem from "./TarefasItem.jsx";

const TarefasLista = ({ tarefas, onEditTarefa, onDeleteTarefa }) => {
    return (
        <ul>
            {tarefas.map((tarefa) => {
                return<TarefasItem key={tarefa.id} tarefa={tarefa} onEditTarefa={onEditTarefa} onDeleteTarefa={onDeleteTarefa} />
            })}
        </ul>
    );
}

export default TarefasLista; 
