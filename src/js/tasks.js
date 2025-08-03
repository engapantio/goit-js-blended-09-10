import refs from './refs';

const functions = {
  data: {},
  createTask() {
    this.data.value = refs.taskName.value;
    this.data.description = refs.taskDescription.value;

    localStorage.setItem(this.data.value, this.data.description);
    console.log(this.data);
  },

  renderTask() {
    const markup = `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${refs.taskName.value}</h3>
      <p>${refs.taskDescription.value}</p>
  </li>`;
    refs.taskList.insertAdjacentHTML('afterbegin', markup);
  },
};

export default functions;
