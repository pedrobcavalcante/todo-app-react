import React from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import { Task } from '../../../../core/models/task';

interface TodoListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
  onReorder: (updatedTasks: Task[]) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  onToggle,
  onEdit,
  onDelete,
  onReorder,
}) => {
  const handleDragEnd = (result: DropResult): void => {
    const { destination, source } = result;

    if (!destination || destination.index === source.index) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, movedTask);

    onReorder(updatedTasks);
  };

  const sortedTasks = [...tasks].sort((a, b) => a.position - b.position);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todo-list">
        {(provided) => (
          <ul
            className={styles.taskList}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {sortedTasks.map((task, index) => (
              <Draggable
                key={task.id.toString()}
                draggableId={task.id.toString()}
                index={index}
              >
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TodoItem
                      id={task.id}
                      text={task.text}
                      completed={task.completed}
                      onToggle={onToggle}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      isFirst={index === 0}
                    />
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
