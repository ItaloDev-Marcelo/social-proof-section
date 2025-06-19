
interface HeaderProps {
    profilePhoto: string
    profileAlt: string
    verified: string
    profileName: string
}

const ProfileHeader = ({profilePhoto,profileAlt,verified,profileName}:HeaderProps) => {
    return (
        <header>
            <img src={profilePhoto} alt={profileAlt} />
            <div>
                <h3> {profileName} </h3>
                <p> <span> {verified} </span> </p>
            </div>
        </header>
    )
}

export default ProfileHeader