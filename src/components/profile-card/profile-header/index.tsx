
interface HeaderProps {
    profilePhoto: string
    profileAlt: string
    verified: string
    profileName: string
}

const ProfileHeader = ({profilePhoto,profileAlt,verified,profileName}:HeaderProps) => {
    return (
        <header className="flex flex-row items-center pb-4">
            <img src={profilePhoto} alt={profileAlt} className="rounded-[50px] w-[40px] mr-7 " />
            <div>
                <h3 className="text-white"> <strong>{profileName}</strong> </h3>
                <p> <span className="text-Soft-Pink font-medium"> {verified} </span> </p>
            </div>
        </header>
    )
}

export default ProfileHeader