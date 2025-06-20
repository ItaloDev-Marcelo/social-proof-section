import type { CardFormate } from "../../global-types";
import CommunParagraph from "../commun-paragraph-component";
import ProfileHeader from "./profile-header";

export default function ProfileCard({profilePhoto,userName,verified,informationQuote}:CardFormate) {
    return (
               <article className="bg-Magenta p-7 my-3 lg:m-3 rounded-[7px]
                w-[330px] h-[250px]  lg:w-[275px] lg:h-[255px] xl:w-[350px] xl:h-[234px] ">
                      <ProfileHeader profilePhoto={profilePhoto} profileName={userName}
                       profileAlt={userName} verified={verified} />
                      <CommunParagraph Text={informationQuote} color="text-Grayish-Magenta" />
                </article>
    )
}

