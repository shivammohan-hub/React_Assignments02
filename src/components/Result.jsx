// 8. Create a Result component that accepts marks as props. Display "Pass" if marks are 40 or above; otherwise, display "Fail".

export default function Result(props) {
    let marks = props.marks ;
    return (
        <div className="">
            {marks >= 40 ? <h1>Pass</h1> : <h1>Fail</h1> }
        </div>
    )
}