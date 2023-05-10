import React from "react";

import UserList from "../components/UserList.js";

const Users = () => {
    const USERS = [
        {
            id:'u1',
            name:'Max Schwarz',
            image:'https://source.unsplash.com/featured/300x201',
            places:3
        },
    ]
    return <UserList items={USERS} />
}

export default Users;