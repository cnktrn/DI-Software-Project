import React, {useEffect, useState} from "react";

const ShoppingLists = () => {
    const [lists, setLists] = useState([]);
    const [newListName, setNewListName] = useState("");

    useEffect(() => {
        getShoppingLists();
    }, []);

    const getShoppingLists = async () => {
        const response = await fetch(
            "http://localhost:5555/lists",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                },
            }
        )

        const jsonResponse = await response.json();
        setLists(jsonResponse);
    }

    const deleteList = async (listId) => {
        await fetch(
            "http://localhost:5555/lists/" + listId,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                },
            }
        );

        getShoppingLists();
    }

    const addNewList = async (e) => {
        e.preventDefault();

        await fetch(
            "http://localhost:5555/lists",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                },
                body: JSON.stringify({listName: newListName}),
            }
        );

        getShoppingLists();
    }

    return (
        <div>
            <h2>My Shopping Lists</h2>
            {
                lists.map(list =>
                    <div key={list._id}>
                        {list.listName}
                        <button>View</button>
                        <button onClick={() => deleteList(list._id)}>Delete</button>
                    </div>
                )
            }
            <div>
                <h2>Create new List</h2>
                <form onSubmit={e => {addNewList(e)}}>
                    <input
                        value={newListName}
                        type={"text"}
                        onChange={e => setNewListName(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ShoppingLists;
