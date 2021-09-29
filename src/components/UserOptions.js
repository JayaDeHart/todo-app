import { useContext } from 'react';
import { PreferencesContext } from '../context/preferences';
import { Button } from '@blueprintjs/core';

function UserOptions() {
  const prefContext = useContext(PreferencesContext);
  const { setPagination, setShowCompleted, showCompleted, pagination } =
    prefContext;
  function toggleShowComp() {
    setShowCompleted((prev) => {
      localStorage.setItem('showComp', !showCompleted);
      return !prev;
    });
  }

  function incrementButton(num) {
    console.log(num);
    setPagination((prev) => {
      localStorage.setItem('pagination', pagination + num);
      return prev + num;
    });
  }

  return (
    <div>
      <Button onClick={toggleShowComp}>
        Show Completed: {showCompleted.toString()}
      </Button>
      <div>
        <p>Display per page: {pagination.toString()}</p>
        <Button
          onClick={() => {
            incrementButton(1);
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            incrementButton(-1);
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default UserOptions;
