export const fetchUsers = async (): Promise<{ id: number; name: string }[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
};