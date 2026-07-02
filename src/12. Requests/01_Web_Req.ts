import axios from "axios";
import type { AxiosResponse } from "axios";
axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then(response => {
    console.log(response.data);
})
interface Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const fetchData = async () => {
    try{
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(response.data);
    }
    catch (error){
        if (axios.isAxiosError(error)){
            console.error("Axios Error:", error.message);
            if (error.response) console.error("Response Data:", error.response.data);
        }
        else console.error("An unexpected error occurred:", error);
    }
}
fetchData();

// axios.get<Todo>("https://jsonplaceholder.typicode.com/todos/1")
//     .then(res => {
//         console.log("Request successful!");
//         console.log(res.data);
//     })
//     .catch(err => {
//         if (axios.isAxiosError(err)) {
//             console.error("Axios Error:", err.message);
//             if (err.response) console.error("Response Data:", err.response.data);
//         } else {
//             console.error("An unexpected error occurred:", err);
//         }
//     })
//     .finally(() => {console.log("Request finished.")});