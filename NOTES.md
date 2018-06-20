redux

reducer =
function to produce part of state, selected by key

container =
react component with direct connection to redux state (AKA smart component)

actions / action creators

action creator =
function which returns an action (an object), often in response to a user event.

action = object with type attribute

Action is then sent to all the reducers, which can update the application state. Then containers are notified and can rerender






