export const arrayItems = [
    {
        name: 'Q&A',
        id : 'q&a',
        description: 'Answer questions based on existing knowledge',
        option: {
            model: "text-davinci-003",
            prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ: Where is the Valley of Kings?\nA:",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
          }
    },
    {
        name: 'Grammer Correction',
        id : 'grammerCorrection',
        description: 'Corrects sentences into standard English'
    },
    {
        name: 'Summarize for a 2nd grader',
        id : 'summary',
        description: 'Translates difficult text into simpler concepts.'
    },
    {
        name: 'English to other languages',
        id : 'translate',
        description: 'Translates English text into French, Spanish and Japanese.'
    },
    {
        name: 'Movie to Emoji',
        id : 'movieToEmoji',
        description: 'Convert movie titles into emoji.'
    },
    {
        name: 'Explain code',
        id : 'explainCode',
        description: 'Explain a complicated piece of code.'
    },
    {
        name: 'JavaScript to Python',
        id : 'jstopy',
        description: 'Convert simple JavaScript expressions into Python'
    },
]