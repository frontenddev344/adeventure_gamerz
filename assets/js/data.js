// const games = [];

const games = [

    {
        title: "Bunny",
        year: 2012,
        platform: ["Freeware", "PC"],
        genre: ["Mystery Adventure", "Indie"],
        description: "A strange spirit has transformed Julian into the world’s first were-bunny. Trapped inside a surreal world filled with eerie landscapes and mysterious creatures, players must use intelligence and unique were-bunny abilities to uncover secrets and find a way back to normal life.\nBunny focuses heavily on atmospheric storytelling, exploration, and puzzle-solving rather than fast-paced action. Its hand-drawn environments and dark fantasy art style create a dreamlike experience that stands out among indie adventure games.",
        features: [
            "Story-driven mystery adventure",
            "Unique were-bunny transformation mechanics",
            "Hand-crafted dark fantasy environments"
        ],
         image: "assets/images/home_walkthrough_image.png",
        closingNote: "The game’s strange world design and emotional atmosphere make it a memorable experience for players who enjoy narrative-heavy indie adventures."
    },

    {
        title: "But That Was (Yesterday)",
        year: 2010,
        platform: ["Freeware", "Mac", "PC"],
        genre: ["Narrative Adventure", "Indie"],
        image: "assets/images/home_walkthrough_image.png"
    },

    {
        title: "Observer",
        year: 2017,
        platform: ["Linux", "Mac", "Nintendo Switch", "PC", "PlayStation", "Xbox One"],
        genre: ["Cyberpunk Horror", "Psychological Thriller"],
        image: "assets/images/home_walkthrough_image.png"
    },

    {
        title: "Airwave~: I Fought the Law, and the Law One",
        year: 2011,
        platform: ["Freeware", "PC"],
        genre: ["Indie Adventure", "Narrative Exploration"],
        image: "assets/images/home_walkthrough_image.png"
    },

    {
        title: "007: James Bond – The Stealth Affair",
        year: 1990,
        platform: ["PC"],
        genre: ["Spy Adventure"],
        image: "assets/images/home_walkthrough_image.png"
    },

    {
        title: "1 Moment of Time: Silentville",
        year: 2012,
        platform: ["Casual", "PC"],
        genre: ["Mystery Adventure", "Hidden Object"],
        image: "assets/images/home_walkthrough_image.png"
    },

    {
        title: "10 Dead Doves",
        year: 2024,
        platform: ["PC"],
        genre: ["Horror Adventure", "Survival Mystery"],
        image: "assets/images/home_walkthrough_image.png"
    }

];

function random(arr) {
    return arr[
        Math.floor(Math.random() * arr.length)
    ];
}




// For Dummy Data

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for (let i = 0; i < letters.length; i++) {

//     games.push({

//         title: letters[i] + " Game One",
//         year: 2000 + i,

//         genre: [random(FILTERS.genre)],
//         theme: [random(FILTERS.theme)],
//         platform: [random(FILTERS.platform)],
//         perspective: [random(FILTERS.perspective)],
//         gameplay: [random(FILTERS.gameplay)],
//         control: [random(FILTERS.control)],
//         style: [random(FILTERS.style)],
//         image: `https://picsum.photos/400/600?random=${i}`
//     });

//     games.push({

//         title: letters[i] + " Game Two",
//         year: 2010 + i,

//         genre: [random(FILTERS.genre)],
//         theme: [random(FILTERS.theme)],
//         platform: [random(FILTERS.platform)],
//         perspective: [random(FILTERS.perspective)],
//         gameplay: [random(FILTERS.gameplay)],
//         control: [random(FILTERS.control)],
//         style: [random(FILTERS.style)],

//         image: `https://picsum.photos/400/600?random=${i + 100}`
//     });
// }