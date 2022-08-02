export const addTodo = (payload) => ({
	type: 'todoList/addTodo',
	payload,
});

export const toggleTodoStatus = (id) => ({
	type: 'todoList/toggleTodoStatus',
	payload: id,
});

export const searchFilterChange = (text) => ({
	type: 'filters/searchFilterChange',
	payload: text,
});

export const statusFilterChange = (status) => {
	return {
		type: 'filters/statusFilterChange',
		payload: status,
	};
};

export const prioritiesFilterChange = (priorities) => {
	return {
		type: 'filters/prioritiesFilterChange',
		payload: priorities,
	};
};
