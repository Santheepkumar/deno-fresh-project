export default function Users({ users }: any) {
    return (
        <div className="m-10 mx-auto flex justify-center gap-4 flex-wrap">
            {users.map((user: any) => (
                <div className="px-6 py-4 space-y-2 bg-gray-200 rounded-md overflow-hidden shadow-md sm:rounded-lg">
                    <div className="">{user.name}</div>
                    <div className="">{user.username}</div>
                </div>
            ))}
        </div>
    );
}
