const listtobedone = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markcomp = (index) => {
    all[index].completed = true;
  };

  let nowday = new Date().toLocaleDateString("en-CA");

  const due = () => {
    return all.filter((todo) => {
      return todo.dueDate < nowday;
    });
  };

  const duedaynow = () => {
    return all.filter((todo) => {
      return todo.dueDate === nowday;
    });
  };

  const duelater = () => {
    return all.filter((todo) => {
      return todo.dueDate > nowday;
    });
  };

  const displayto = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == nowday ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markcomp,
    due,
    duedaynow,
    duelater,
    displayto,
  };
};

module.exports = listtobedone;

