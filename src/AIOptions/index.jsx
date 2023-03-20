export const arrayItems = [
    {
        name: 'Q&A',
        id : 'q&a',
        description: 'Answer questions based on existing knowledge',
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
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