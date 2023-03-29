import React from "react";
import { useDispatch } from "react-redux";
import { changeTodoItemStatus } from "../redux/todoSlice";

export const TodoListItem = React.memo(({ todoData }) => {
  const dispatch = useDispatch();
  const { id, todoItem, completed } = todoData;
  const changeStatus = (e, id) => {
    dispatch(changeTodoItemStatus({ id, todoStatus: e.target.checked }));
  };

  return (
    <li className="list-group-item" key={id}>
      <input
        className="form-check-input me-2"
        type="checkbox"
        checked={completed}
        onChange={(e) => changeStatus(e, id)}
      />
      <span>
        {todoItem} {completed ? "(Task Done)" : "(Task Incomplete)"}
      </span>
    </li>
  );
});
