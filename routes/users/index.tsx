import Users from "../../islands/Users.tsx";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<any> = {
    async GET(req: any, ctx: any) {
        const value = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await value.json();
        return ctx.render({ users });
    },
};

export default function UsersPage(props: any) {
    return (
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                <h1>Users</h1>
                <Users users={props.data.users} />
            </div>
        </div>
    );
}
