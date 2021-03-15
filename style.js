fetch("./character.json", {})
.then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach((character) => {
      let newDiv = document.createElement("div");
      //newDiv.classList.add("movie-item");

      
      let characterPhoto = new Image (150,250);
      characterPhoto.src = character.photo;
      newDiv.append(characterPhoto);

 
   
      let movieTitle = document.createElement("h2");

      movieTitle.innerText = character.name;
      newDiv.append(movieTitle);

      let characterAlias = document.createElement("h3");
      characterAlias.innerText = "Alias: " + character.alias;
      newDiv.append(characterAlias);

      let characterSpecies = document.createElement("h3");
      characterSpecies.innerText = "Species: " + character.species;
      newDiv.append(characterSpecies);

      let characterCitizenship = document.createElement("h3");
      characterCitizenship.innerText = "Citizenship: " + character.citizenship;
      newDiv.append(characterCitizenship);

      let characterGender = document.createElement("h3");
      characterGender.innerText = "Gender: " + character.gender;
      newDiv.append(characterGender);

      let characterDateOfBirth = document.createElement("h3");
      characterDateOfBirth.innerText = "Date Of Birth: " + character.dateOfBirth;
      newDiv.append(characterDateOfBirth);

      let characterDateOfDeath = document.createElement("h3");
      characterDateOfDeath.innerText = "Date Of Death: " + character.dateOfDeath;
      newDiv.append(characterDateOfDeath);

      let characterMovies = document.createElement("h3");
      characterMovies.innerText = "Movies: " + character.movies;
      newDiv.append(characterMovies);

     

      let rating = document.createElement("p");
      let numRating = parseInt(character.rating);
      for (let i = 0; i < numRating; i++) {
        rating.innerText += "💀";
      }
      newDiv.append(rating);
      document.querySelector("#json").append(newDiv);
    });
  })
  .catch((error) => {
    console.error(error);
  });














/*
const characterInfo = [
    {
        name: "Anthony Edward Stark, (Tony Stark)",
        alias: "Iron Man",
        species: "Human",
        citizenship: "American", 
        gender: "Male", 
        dateOfBirth: "May 29, 1970",
        dateOfDeath: "October 2023",
        movies: "Iron Man, The Incredible Hulk, Iron Man 2, The Avengers, Iron Man 3, Avengers: Age of Ultron, Captain America: Civil War, Spider-Man: Homecoming, Avengers: Infinity War, Avengers: Endgame"
    
    }, 
    {
        name: "Thor Odinson, (Thor)",
        alias: "God of Thunder",
        species: "Asgardian",
        citizenship: "Asgardian", 
        gender: "Male", 
        dateOfBirth: "964 A.D. - 965 A.D.",
        dateOfDeath: "Still Alive",
        movies: "Thor, Captain America: The First Avengers, The Avengers, Thor: The Dark World, Avengers: Age of Ultron, Captain America: Civil War, Doctor Strange, Thor: Ragnarok, Avengers: Infinitywar, Avengers: Endgame"
    }, 
    {
        name: "Steven Grant Rogers, (Steve Rogers)",
        alias: "Captain America",
        species: "Human",
        citizenship: "American", 
        gender: "Male", 
        dateOfBirth: "July 4, 1918",
        dateOfDeath: "Still Alive",
        movies: "Captain America: The First Avenger, The Avengers, Captain America: The Winter Soldier, Avengers: Age of Ultron, Ant-Man, Captain America: Civil War, Avengers: Infinity War, Avengers: Endgame, Spider-Man: Far From Home"
    }
];


    
*/
