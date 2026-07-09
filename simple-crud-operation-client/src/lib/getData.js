export const getData = async () => {
    const api = await fetch("http://localhost:8000/users");
    const data = await api.json();
    return data;
}