const Total = ({ parts }) => {
    const exerciseArray = parts.map(part =>
        part.exercises)
    console.log(exerciseArray)
    const total = exerciseArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    return (
        <div>
            <p>
                <strong>Total of {total} exercises</strong>
            </p>
        </div>
    )
}

export default Total