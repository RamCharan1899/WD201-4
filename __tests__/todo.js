const listtobedone = require("../todo");
let nowday = new Date().toLocaleDateString("en-CA");

const { all, markcomp, add, due, duedaynow, duelater } = listtobedone();

describe("Using the To do List", () => {
  beforeAll(() => {
    add({
      title: "Eating with Drinks",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Adding Data to the list", () => {
    let length = all.length;

    add({
      title: "Complete Eating",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Tick in To do List", () => {
    expect(all[0].completed).toBe(false);
    markcomp(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieve all todos that are due", () => {
    let list_tobedone = due();

    expect(
      list_tobedone.every((todo) => {
        return todo.dueDate < nowday;
      })
    ).toBe(true);
  });

  test("retrieve all todos that are due for nowday", () => {
    let list_tobedone = duedaynow();

    expect(
      list_tobedone.every((todo) => {
        return todo.dueDate === nowday;
      })
    ).toBe(true);
  });

  test("retrieve all to do's that are due for later", () => {
    let list_tobedone = duelater();

    expect(
      list_tobedone.every((todo) => {
        return todo.dueDate > nowday;
      })
    ).toBe(true);
  });
});
