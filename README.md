# BugTracker App (using redux)

- Design the store
- Define the actins
- Create a reducer
- Setup the store

# Structure
- Store Structure<br>
```json
{
    bug : [
        {
            id: 1,
            description: '',
            resolved: false
        }
    ]
}
```

- Action structure <br>
```json
{
    type: "bugRemoved",
    payload: {
        id: 1
    }
}
```
- Reducer 

# Define Actions
- Add a bug
- Mark as Resolved
- Delete a bug