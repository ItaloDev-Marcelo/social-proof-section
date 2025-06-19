import { CardData } from "../../Data/globalData";
import CommunParagraph from "../commun-paragraph-component";
import ProfileHeader from "./profile-header";

export default function ProfileCard() {
    return (
         <>
           {
            CardData.map(({id,profilePhoto,userName,verified,informationQuote}) => {
               <article key={id} >
                      <ProfileHeader profilePhoto={profilePhoto} profileName={userName}
                       profileAlt={userName} verified={verified} />
                      <CommunParagraph Text={informationQuote} />
                </article>
            }) 
           }
         </>
    )
}

