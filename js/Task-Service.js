export default class TaskServise {
    getListTask() {
        return axios({
            url: "https://6183caa491d76c00172d1b4b.mockapi.io/api/todoList",
            method: "GET"
        });
    }
    deleteListTask(id) {
        return axios({
            url: `https://6183caa491d76c00172d1b4b.mockapi.io/api/todoList/${id}`,
            method: "DELETE"
        });
    }
    addListTask(task) {
        return axios({
            url: `https://6183caa491d76c00172d1b4b.mockapi.io/api/todoList`,
            method: "POST",
            data:task
        });
    }
}