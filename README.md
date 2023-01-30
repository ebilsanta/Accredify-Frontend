# Accredify-Frontend
 
## Introduction to Project
Hi, this is a mini Pokemon Wiki app that uses data from [PokeAPI](https://pokeapi.co/). 
  
It displays all pokemon available from the database, including images and basic information about them, such as their Name, ID, types, height/weight, and moves. 
  
There is also a search bar with a case-insensitive autocomplete feature to browse the entries easily.  

## Technologies used
The project is built on **Vue** using **Nuxt** for routing and static site generation. 
  
Additionally, UI components from **Ant Design Vue** are used.  
  
Data is fetched once during build and stored in **Pinia** to provide access to all components easily. 

## Instructions to run locally
1. Clone the repo 
   ```sh
   git clone https://github.com/ebilsanta/Accredify-Frontend.git
   ```
2. Change directory
   ```sh
   cd Accredify-Frontend
   ```
3. Install packages
   ```sh
   npm i --force
   ```  
4. Create build
    ```sh
   npx nuxi generate
   ``` 
5. Preview build
   ```sh
   npm run preview
   ```  
5. View the project at http://localhost:3000  

## Design considerations
###### Data fetching
I wanted to design the app to display all pokemon to the user. As PokeAPI only returns one pokemon per request, all pokemon data had to be retrieved when the app is built. This would allow the data to be displayed quickly without making any API calls on the client-side. Additionally, this would allow for an **autocomplete** feature to be enabled as all the data is already available on the client. This was an essential feature as most users may not remember the pokemon's name fully, and the API required the full correct pokemon name. 
###### UI Consistency
To ensure a clear consistent user interface, I decided to make use of components from **Ant Design Vue**.  
###### Nuxt
As the data required by the app did not change frequently, I wanted to generate a static site with no API calls on the client. Nuxt provided features such as static site generation and page-based routing which made development easier. 
###### Pinia store
I wanted to avoid prop drilling and experiment with stores so I used Pinia in this app. 
