// export const fetchPokemons = async() => {
//     const res = await fetch("http://localhost:8000/");
//     const data = await res.json()
//     return data
// };

// export const fetchHeaders = async() => {
//     const res = await fetch("http://localhost:8000/headers");
//     const data = await res.json()
//     return data
// };

export const fetchPokemons = async() => {
    const res = await fetch("https://s3d6xvpja0.execute-api.eu-central-1.amazonaws.com/dev");
    const data = await res.json()
    return data
};

export const fetchHeaders = async() => {
    const res = await fetch("https://s3d6xvpja0.execute-api.eu-central-1.amazonaws.com/dev/headers");
    const data = await res.json()
    return data
};