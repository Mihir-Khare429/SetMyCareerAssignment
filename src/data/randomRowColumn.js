export const tableConfig = () => {
    const randomInt = Math.floor(Math.random() * 11) + 1
    const data = {
        x : randomInt,
        y : randomInt
    }

    return data
}