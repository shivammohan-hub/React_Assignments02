// 6. Create a User Profile component that accepts a user's name, email, and profile image URL through props.

export default function UserProfile(props) {
    let username = props.name
    let email = props.email
    let image = props.image
    return (
        <div className="shadow p-5 w-fit m-5 flex items-center gap-5">
            <h2 className="text-2xl font-semibold">{username}</h2>
            <h1 className="text-3xl font-bold">{email}</h1>
            <img className="h-40 w-auto" src={image} alt="image" />
        </div>
    )
}