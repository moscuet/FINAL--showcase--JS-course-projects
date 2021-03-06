## Array practice exercise

```
const band = {
    members: {
        current: [
            { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
            { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
            { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
            { name: 'Steve', age: 55, plays: ['guitar'] }
        ],
        past: [
            { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
            { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
            { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }
        ]
    }
};

const expected = {
    members: {
        // current: no changes
        current: [
            { name: 'Sascha', age: 59, plays: ['vocals', 'synth', 'guitar', 'bass'] },
            { name: 'Lucia', age: 49, plays: ['vocals', 'synth'] },
            { name: 'Jules', age: 53, plays: ['guitar', 'bass', 'synth'] },
            { name: 'Steve', age: 55, plays: ['guitar'] }
        ],
        // past: no changes
        past: [
            { name: 'Raymond', age: 57, plays: ['vocals', 'synth'] },
            { name: 'En', age: 52, plays: ['vocals', 'drums', 'guitar', 'synth'] },
            { name: 'Gunter', age: 57, plays: ['guitar', 'synth'] }
        ],
        // ORDER MATTERS!
        // 1. Sort age first by DESC
        // 2. then sort name by ASC
        // 3. lowercase all the names
        all: [
            "sascha", 59
            "gunter", 57
            "raymond", 57
            "steve", 55
            "jules", 53
            "en", 52
            "lucia" 49
        ]
    },
    // plays order doesn't matter
    plays: {
        // name order doesn't matter
        // but show the name in lowercase
        vocals: ["sascha", "lucia", "raymond", "en"],
        synth: ["sascha", "lucia", "jules", "raymond", "en", "gunter"],
        guitar: ["sascha", "jules", "steve", "en", "gunter"],
        bass: ["sascha", "jules"],
        drums: ["en"]
    }
};

```

