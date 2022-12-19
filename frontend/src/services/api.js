export const fetchPokemons = async() => {
    const res = await fetch("http://localhost:8000/");
    const data = await res.json()
    console.log(data)
    return data
};