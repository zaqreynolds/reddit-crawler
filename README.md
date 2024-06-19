# REDDIT CRAWLER

This project was created for my capstone CodeCademy Front End Developer project focusing on React and Redux and embellished with Material UI.

## App Features:

- Fetches 25 posts from Reddit's API upon loading.
- User can filter from predetermined categories.
- User can enter a search term, new results are fetched and new filters apply to this search.
- Clicking on a post/Card renders all comments and replies for this post via recursion.
- functional 'next' and 'back' buttons which fetch an additional 25 posts in accordance with the search/filter selections.
- Loading animation displayed while awaiting for data from the API fetch.

### `Future Work`

- build out end to end tests using Jest etc.
- clear out remaining non-performance impacting bugs (nested anchors, top level recursion <ul> needing a unique ID/key for comments section, and awaiting fetch error to resolve)
