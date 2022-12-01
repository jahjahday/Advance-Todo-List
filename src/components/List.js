import React from "react";

const List = ({
  lists,
  drag,
  deleteHandler,
  clear,
  change,
  click,
  todo,
  ref,
}) => {
  return (
    <div>
      <div className="bg-[#140d0d] h-[60vh]">
        <br />
        <input
          onChange={change}
          onKeyPress={(e) => e.key === "Enter" && click()}
          type="text"
          placeholder="Create a new todo"
          value={todo}
          ref={ref}
          className="bg-blue p-2 w-[35%] absolute bottom-[70%] left-[33%]"
        />
        <div className="flex justify-center items-center relative bottom-[5em] left-1">
          <div className="w-[35%]">
            {lists.map((list) => (
              <>
                <ul
                  onDragOver={drag}
                  onDragEnd
                  onDrop={drag}
                  key={list.id}
                  className="flex justify-between py-2 px-12 bg-black text-white border-y-1"
                >
                  <input type="radio" />
                  <li key={list.id} draggable onDragStart={drag}>
                    {" "}
                    {list.task}{" "}
                  </li>
                  <button className="" onClick={() => deleteHandler(list.id)}>
                    X
                  </button>
                </ul>
              </>
            ))}

            <div className="flex bg-[black] px-6 py-3 text-gray-500 justify-between">
              <small>5 items left</small>
              <div className="flex justify-between w-[35%]">
                <button className="hover:text-white">
                  <small> All </small>
                </button>
                <button className="hover:text-white">
                  {" "}
                  <small>Active</small>{" "}
                </button>
                <button className="hover:text-white">
                  {" "}
                  <small>Completed</small>{" "}
                </button>
              </div>
              <button onClick={clear} className="hover:text-white">
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
  );
};

export default List;
