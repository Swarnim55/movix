# Movix - Latest Movies and TV Shows Listing SPA (Search / Filter / View Trailer)

1. Created project with Vite and installed required dependencies.
2. Created a global method to make API CALLS via axios.
3. Created Redux Store and provided it to React.
4. Setup Redux Toolkit with store and home slice, initilized apiTesting Function using dispatch.
5. Created Routes with Browser Router, initialized hero banner with search bar and search component.
6. Used useNavigate() Hook to pass search params and navigate to the search component.
7. Created Custom Hook useFetch to reduce the use of useEffect and boilerplate code of calling apis.
8. Created Header component, imported react-icons, useNavigate and useLocation to navigate through pages.
9. Added Footer section, imported react-icons for socials via react-icons.
10. Created Carousel Section and switch tabs, consumed trending data from TMDB Api with useFetch custom hook.
11. Completed Rating Component used React-circular-progress bar to render average vote count and date-js to format the release date.
12. Implemented Promise.All to call multiple API of Movies & TV Shows genre and stored using dispatch to genres, completed carousel slider functionality.
13. Reused Trending Component for Popular and Top Rated, consumed API and completed Home Page
14. Created Details Component and consumed api via useFetch custom hook to fetch details of the content.
15. Cast Cast Component for the Details Page and added cast section.
