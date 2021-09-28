import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import Header from '../header.js';
import Form from '../form';
import Items from '../items';
import { v4 as uuid } from 'uuid';
import { PreferencesContext } from '../../context/preferences';
import './todo.css';
import '@blueprintjs/core/lib/css/blueprint.css';

const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [page, setPage] = useState(0);
  const prefContext = useContext(PreferencesContext);
  const { pagination } = prefContext;
  const [pagPosts, setPagPosts] = useState([]);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  useEffect(() => {
    let start = page * pagination;

    let end = page * pagination + pagination;

    setPagPosts(list.slice(start, end));
  }, [list, page]);

  function goNext() {
    setPage((prev) => prev + 1);
  }

  function goBack() {
    setPage((prev) => prev - 1);
  }
  return (
    <>
      <Header incomplete={incomplete} />
      <div className="main-content">
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />

        <div>
          <Items list={pagPosts} toggleComplete={toggleComplete} />
          {list.length > 4 && <button onClick={goNext}>Next</button>}
          {list.length > 4 && page > 0 && (
            <button onClick={goBack}>Previous</button>
          )}
          <div>{page}</div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
