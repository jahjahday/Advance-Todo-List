import { useState, useEffect, useRef, createContext } from "react";
import ReactSwitch from "react-switch";
import "./App.css";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

export const ThemeContext = createContext(null);

function App() {
  const [todo, setTodo] = useState("");
  const [lists, setLists] = useState([]);
  const [count, setCount] = useState(0);
  const [switcher, setSwitcher] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    setCount(lists.length);
  }, [lists.length]);

  const clearHandler = () => {
    setLists([]);
  };

  const click = () => {
    setSwitcher((switcher) => !switcher);
  };

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const onClickHandler = () => {
    if (todo === "") return null;
    else setLists([...lists, { task: todo, id: Math.random() }]);
    setTodo("");
  };

  const onDeleteHandler = (id) => {
    setLists(lists.filter((task) => task.id !== id));
  };

  const lineThrough = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty("text-decoration");
    } else {
      event.target.style.setProperty("text-decoration", "line-through");
    }
  };

  const completed = () => {
    alert("Clicked");
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="flex lg:justify-around sm:justify-between sm:px-7 lg:px-[19em] relative top-12">
          <h1 className="text-[2rem] tracking-[.4em] text-white">TODO</h1>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <div id="dark" className="">
          <div className="h-[100%] " id={theme}>
            <br />
            <input
              onChange={onChangeHandler}
              onKeyPress={(e) => e.key === "Enter" && onClickHandler()}
              type="text"
              placeholder="Create a new todo"
              value={todo}
              ref={inputRef}
              className="bg-[#393a4c] list text-white p-2 h-12 sm:w-[90%] rounded sm:left-[1.5em] sm:top-[8em] md:w-[50%] md:left-[28%] md:top-[20%] lg:w-[34.7%] absolute lg:bottom-[72%] lg:left-[32.8%] "
            />
          </div>
          <div className="down h-[23.5rem] bg-[#393a4c]">
            <div className="flex justify-center items-center relative bottom-[5em] ">
              <div className="lg:w-[35%]">
                {lists.map((list) => (
                  <>
                    <ul
                      key={list.id}
                      className="flex justify-between list rounded sm:w-[27.5em] sm:py[5em]  md:w-[26.5sem] lg:w-[100%] py-2 px-12 bg-[#393a4c] text-white border-y-1"
                    >
                      <div onClick={click}>
                        {switcher && <FaCheckCircle />}
                        {!switcher && <FaRegCircle />}
                      </div>
                      <li
                        key={list.id}
                        onClick={lineThrough}
                        className="cursor-pointer"
                      >
                        {" "}
                        {list.task}
                      </li>
                      <button
                        className=""
                        onClick={() => onDeleteHandler(list.id)}
                      >
                        X
                      </button>
                    </ul>
                  </>
                ))}

                <div className="flex list bg-[#393a4c] sm:w-[27.3em] list px-6 py-3 text-gray-500 justify-between rounded sm:h-[3em] lg:w-[100%]">
                  <small>{count} items left</small>
                  <div className="flex justify-between w-[35%]">
                    <button className=" hover hover:text-white">
                      <small> All </small>
                    </button>
                    <button className="hover hover:text-white">
                      {" "}
                      <small>Active</small>{" "}
                    </button>
                    <button
                      onClick={completed}
                      className="hover hover:text-white"
                    >
                      {" "}
                      <small>Completed</small>{" "}
                    </button>
                  </div>
                  <button
                    onClick={clearHandler}
                    className="hover hover:text-white"
                  >
                    {" "}
                    <small>Clear Completed</small>{" "}
                  </button>
                </div>
              </div>
            </div>
            <small className="flex justify-center text-gray-600">
              Drag and drop to reorder list
            </small>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
