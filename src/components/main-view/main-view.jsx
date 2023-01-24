import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: 'Donnie Darko',
      Description:
        'A mystery film is a genre of film that revolves around the solution of a problem or a crime.',
      Genre: {
        Name: 'Mystery',
        Description:
          'A mystery film is a genre of film that revolves around the solution of a problem or a crime.'
      },
      Director: {
        Name: 'Richard Kelly',
        Bio: 'James Richard Kelly is an American filmmaker and screenwriter, who initially gained recognition for writing and directing the cult classic Donnie Darko in 2001.',
        Birthday: '1975-03-28'
      },
      movieYear: '2001',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/d/db/Donnie_Darko_poster.jpg',
      Featured: true
    },
    {
      id: 2,
      Title: 'Coherence',
      Description:
        'Strange things begin to happen when a group of friends gather for a dinner party on an evening when a comet is passing overhead.',
      Genre: {
        Name: 'Mystery',
        Description:
          'A mystery film is a genre of film that revolves around the solution of a problem or a crime.'
      },
      Director: {
        Name: 'James Ward Byrkit',
        Bio: 'James Ward Byrkit is an American film director, writer, and actor. He is best known for directing the science fiction thriller Coherence and co-writing the script for Rango, one of his many collaborations with Gore Verbinski. For Rango, Byrkit starred as several characters, most notably Waffles, a horned lizard.',
        Birthday: '1985'
      },
      movieYear: '2013',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/9/9d/Coherence_2013_theatrical_poster.jpg',
      Featured: true
    },
    {
      id: 3,
      Title: 'Shutter Island',
      Description:
        'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
      Genre: {
        Name: 'Mystery',
        Description:
          'A mystery film is a genre of film that revolves around the solution of a problem or a crime.'
      },
      Director: {
        Name: 'Martin Scorsese',
        Bio: 'Martin Charles Scorsese is an American film director, producer, screenwriter and actor. Scorsese emerged as one of the major figures of the New Hollywood era.',
        Birthday: '1942'
      },
      movieYear: '2010',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/7/76/Shutterislandposter.jpg',
      Featured: true
    },
    {
      id: 4,
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Description:
        'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      Genre: {
        Name: 'Action',
        Description:
          'Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work.'
      },
      Director: {
        Name: 'Peter Jackson',
        Bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
        Birthday: '1961'
      },
      movieYear: '2001',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg',
      Featured: true
    },
    {
      id: 5,
      Title: 'The Lord of the Rings: The Two Towers',
      Description:
        "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      Genre: {
        Name: 'Action',
        Description:
          'Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work.'
      },
      Director: {
        Name: 'Peter Jackson',
        Bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
        Birthday: '1961'
      },
      movieYear: '2002',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg',
      Featured: true
    },
    {
      id: 6,
      Title: 'The Lord of the Rings: The Return of the King',
      Description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      Genre: {
        Name: 'Action',
        Description:
          'Action films are built around a core set of characteristics: spectacular physical action; a narrative emphasis on fights, chases, and explosions; and a combination of state-of-the-art special effects and stunt-work.'
      },
      Director: {
        Name: 'Peter Jackson',
        Bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter and producer. He is best known as the director, writer and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.',
        Birthday: '1961'
      },
      movieYear: '2003',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg',
      Featured: true
    },
    {
      id: 7,
      Title: 'Parasite',
      Description:
        'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
      Genre: {
        Name: 'Drama',
        Description:
          "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
      },
      Director: {
        Name: 'Bong Joon Ho',
        Bio: 'Bong Joon-ho is a South Korean film director, producer and screenwriter. The recipient of four Academy Awards, his filmography is characterised by emphasis on social themes, genre-mixing, black humor, and sudden tone shifts.',
        Birthday: '1969'
      },
      movieYear: '2019',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png',
      Featured: true
    },
    {
      id: 8,
      Title: "Harry Potter and the Philosopher's Stone",
      Description:
        'An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.',
      Genre: {
        Name: 'Adventure',
        Description:
          'Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.'
      },
      Director: {
        Name: 'Chris Columbus',
        Bio: 'Chris Joseph Columbus is an American filmmaker. Born in Spangler, Pennsylvania, Columbus studied film at Tisch School of the Arts where he developed an interest in filmmaking.',
        Birthday: '1958'
      },
      movieYear: '2001',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg',
      Featured: true
    },
    {
      id: 9,
      Title: 'Fight Club',
      Description:
        'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      Genre: {
        Name: 'Drama',
        Description:
          "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
      },
      Director: {
        Name: 'David Fincher',
        Bio: 'David Andrew Leo Fincher is an American film director. His films, mostly psychological thrillers and biographical dramas, have received 40 nominations at the Academy Awards, including three for him as Best Director. Fincher was the co-founder of Propaganda Films, a film and music video production company.',
        Birthday: '1962'
      },
      movieYear: '1999',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
      Featured: true
    },
    {
      id: 10,
      Title: 'Interstellar',
      Description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Genre: {
        Name: 'Drama',
        Description:
          "The drama genre features stories with high stakes and many conflicts. They're plot-driven and demand that every character and scene move the story forward. Dramas follow a clearly defined narrative plot structure, portraying real-life scenarios or extreme situations with emotionally-driven characters."
      },
      Director: {
        Name: 'Christopher Nolan',
        Bio: 'Christopher Edward Nolan CBE is a British-American filmmaker. Known for his lucrative Hollywood blockbusters with complex storytelling, Nolan is considered a leading filmmaker of the 21st century. His films have grossed $4.9 billion worldwide.',
        Birthday: '1970'
      },
      movieYear: '2014',
      ImageURL:
        'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
      Featured: true
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
