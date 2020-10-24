# BugTracker App (using redux)

- Design the store
- Define the actions
- Create a reducer
- Setup the store

# Define Actions
- Add a bug
- Mark as Resolved
- Delete a bug

# Structure
- Store Structure<br>
```javascript
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
```javascript
{
    type: "bugAdded",
    payload: {
        id: Number,
        description: String
    }
}

{
    type: "bugResolved",
    payload: {
        id: Number
    }
}

{
    type: "bugRemoved",
    payload: {
        id: Number
    },
}
```
- Reducer 

```javascript
//BugAdded
{
    ...state,
    {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
    }
}

//BugResolved
{
    ...state.map(bug=>bug.id !== bug.id ? bug: {...bug,resolved:true})
}

//BugRemoved
{
    ...state.filter(bug => bug.id !== bug.payload.id )
}
```
