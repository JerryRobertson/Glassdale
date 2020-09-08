let witnesses = []

export const useWitness = () => {
    return witnesses.slice()
}
export const getWitnesses = () => {
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(
        parsedWitnesses => {
            // console.table(parsedWitnesses)
            witnesses = parsedWitnesses
        }
    )

}