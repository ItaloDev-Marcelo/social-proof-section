import type { CardFormate } from "../../global-types";
import CommunParagraph from "../commun-paragraph-component";
import ProfileHeader from "./profile-header";

export default function ProfileCard({profilePhoto,userName,verified,informationQuote}:CardFormate) {
    return (
               <article>
                      <ProfileHeader profilePhoto={profilePhoto} profileName={userName}
                       profileAlt={userName} verified={verified} />
                      <CommunParagraph Text={informationQuote} />
                </article>
    )
}

