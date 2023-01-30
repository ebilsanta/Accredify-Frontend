# Accredify-Frontend
 
## Introduction to Project
Hi, this is a mini Pokemon Wiki app that uses data from [PokeAPI](https://pokeapi.co/). 
  
It displays all pokemon available from the database, including images and basic information about them, such as their Name, ID, types, height/weight, and moves. 
  
There is also a search bar with a case-insensitive autocomplete feature to browse the entries easily.  

## Technologies used
The project is built on **Vue** using **Nuxt** for routing and static site generation.  
  
Data is fetched once during build and stored in **Pinia** to provide access to all components easily. 

## Instructions to run locally
1. Clone the repo
   ```sh
   git clone https://github.com/ebilsanta/Accredify-Frontend.git
   ```
2. Install packages
   ```sh
   npm install
   ```  
   or
   ```sh
   yarn add
   ``` 
3. Create build
    ```sh
   npx nuxi generate
   ``` 
4. Preview build
   ```sh
   npm run preview
   ```  
   or
   ```sh
   yarn preview
   ``` 
5. View the project at http://localhost:3000
   
