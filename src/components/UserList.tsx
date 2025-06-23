type User = {
    id: number;
    name: string;
};

type UserListProps = {
    data: User[];
};

export default function UserList({ data }: UserListProps) {
    return (
        <ul>
            {data.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
