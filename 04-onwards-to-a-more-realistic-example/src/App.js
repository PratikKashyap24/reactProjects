import React, { useCallback, useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./components/hooks/use-http";

function App() {
  const url = "https://database-64115-default-rtdb.firebaseio.com/tasks.json";
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);
  const transformedTasks = useCallback((taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp(transformedTasks); //Destructing the retuen values from a custom hook
  // const { isLoading, error, sendRequest } = httpData; //Can be used but for shortcut use ^
  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://database-64115-default-rtdb.firebaseio.com/tasks.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  //   setIsLoading(false);
  // };

  const taskValue = (props) => {
    setTasks(props.tasks);
  };
  <useHttp taskValue={tasks} />;

  useEffect(() => {
    fetchTasks({ url: url });
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
