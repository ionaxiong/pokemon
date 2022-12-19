export const fetchPokemons = async() => {
    const res = await fetch("http://localhost:8000/");
    const data = await res.json()
    return data
};

export const fetchHeaders = async() => {
    const res = await fetch("http://localhost:8000/headers");
    const data = await res.json()
    return data
};