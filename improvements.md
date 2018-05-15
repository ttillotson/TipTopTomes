# Improvements

## Shelf

Showing the shelves on the show page isn't updating correctly because it is getting pulled from multiple slices of state.
Redoing it is more work than it's worth; pass book object along with it's shelf IDs and pull from there
Likely places to update:

+ Book: show.json.jbuilder
    + Add shelf ID's for all current_user shelves
        + Though this is not the most optimized solution, it will solve the problem of always makign sure the most recent information is available
    + Set the shelf slice of state to pull on this ajax call

+ Shelfmembership: create.json.jbuilder
    + Pass the book object's user shelves to update the above slice of state
