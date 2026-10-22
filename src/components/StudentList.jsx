// 9. Create a list of five student names and display them using the JavaScript map() method.

export default function StudentList() {
    let students = ["shivam","mohan","ankit","om","vishal"]
    return (
        <div className="">
            <h1><u>Student List</u></h1>
            {students.map((studentName, index) => (
                <div className="">
                    {index+1}. {studentName}
                </div>
            ))}
        </div>
    )
}