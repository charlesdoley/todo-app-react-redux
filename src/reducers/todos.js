
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
    case 'SORT_TODO':
      let sortedArray = state.sort((a,b) => {
            var x = a.text.toLowerCase();
            var y = b.text.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
      return [...sortedArray];
    default:
      return state;
  }
}

export default todos;