const shakespeareApi = "https://api.graph.cool/simple/v1/shakespeare"

export const options = () => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: `{
                allPoems(
                    first: 1
                    skip: ${randomInt(0, 100)}
                ) {
                    title
                    author
                    lines
                    text
                }
            }`
        }),
    }
}

export function randomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}