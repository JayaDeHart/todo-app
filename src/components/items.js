import React, { useContext, useState } from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import { PreferencesContext } from '../context/preferences';

function Items(props) {
  const { toggleComplete, list } = props;
  const prefContext = useContext(PreferencesContext);
  const { showCompleted } = prefContext;

  return (
    <div className="todo-items">
      {list.map((item) => (
        <Card elevation={Elevation.ONE} key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Items;
