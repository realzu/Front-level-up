import React, { useCallback } from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    />
    // <div className="TodoList">
    //   {todos.map((todo) => (
    //     <TodoListItem
    //       key={todo.id}
    //       todo={todo}
    //       onRemove={onRemove}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </div>
  );
};

export default React.memo(TodoList);
