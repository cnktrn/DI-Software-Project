import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ShoppingList = () => {
    const [list, setList] = useState();
    const {id} = useParams();

    useEffect(() => {
        getShoppingList();
    }, []);

    const getShoppingList = async () => {
        const response = await fetch(
            "http://localhost:5555/lists/" + id,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                },
            }
        )

        const jsonResponse = await response.json();
        setList(jsonResponse);
    }

    const removeItem = async (removableItem) => {
        const oldList = list;
        const newContent = oldList.content.filter(item => item !== removableItem);
        const newList = oldList;
        newList.content = newContent;

        await fetch(
            "http://localhost:5555/lists/" + id,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token"),
                },
                body: JSON.stringify({...newList}),
            }
        )

        getShoppingList();
    }

    return (
        <div>
            <h2>{list && list.listName}</h2>
            {list && list.content.map(item =>
                <div key={item}>
                    {item}
                    <button onClick={() => removeItem(item)}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default ShoppingList;
