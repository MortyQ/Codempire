import axios from "axios";

export async function getCategories(){
    const result = await axios.post('https://api.chucknorris.io/jokes/categories')
    return result
}