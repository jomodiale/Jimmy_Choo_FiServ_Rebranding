# FiServ Rebrand for Jimmy Choo Powered by Coveo

The initial UI was created using [Coveo CLI - ui:create:react](https://docs.coveo.com/en/cli/#coveo-uicreatereact-name).

## Modifications
1.	NavBar.tsx file modifications include BG Color, text color, styling (flex-direction) for separate columns.
2.	Header.tsx file modifications include BG Color and the addition of icons. Modified navigation link code to conditionally render ‘Sale’ text with #bf2d2d color.
3.	HomeConfig.tsx file; changed contents of HeroConfig and HeaderConfig objects.
4.	HeroHome.tsx file; changed BG image and text wrapper placement
5.	Footer.tsx file modifications include structure, styling flex-direction, BG color, text color, and icons.
6.	SearchTabs.tsx file; changed BG color, text color, hover effect, and the selection effect.
7.	SearchPage.tsx file and ResultList.tsx is responsible for search results page structure – modified layout to 3 column grids, removed facets i.e., FacetList component and sidebar recommendations component (commented out to prevent rendering)
8.	VideoResultTemplate.tsx and CustomPeopleResultTemplate.tsx files; change styling (flex-direction) to conform better with the card layout and reorganised contents within the text wrapper component.
9.	Created a new component OffCanva.js to manage sidebar pop-ups for filters.
10.	Modified DidYouMean.tsx styling

## Cloning and Running the Application in local
Clone the project into local and
Install all the npm packages

```bash
git clone https://github.com/jomodiale/Jimmy_Choo_FiServ_Rebranding
npm install
```
In order to run the application Type the following command
```bash
npm start
```
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
