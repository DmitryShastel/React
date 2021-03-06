import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: {users: Array<string>} ) => {
    console.log("users")
    return <div> {
        props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UserSecret);

export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dima", "Valera", "Artem"]);

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers)
    }
    return <>
        <button onClick = {() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add user</button>
        < NewMessageCounter count = {counter}/>
        <Users users = {users}/>
    </>
}


