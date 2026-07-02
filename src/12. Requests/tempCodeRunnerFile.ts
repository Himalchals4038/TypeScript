import axios from "axios";
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => {console.log(res.data)})
    .catch(err => {console.error("An error occurred:", err.message)})
    .finally(() => {console.log("Request finished.")});