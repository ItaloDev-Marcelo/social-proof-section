import CommunParagraph from "../components/commun-paragraph-component";
import ProfileCard from "../components/profile-card";
import ReviewComponent from "../components/review-component";
import { CardData, ReviewData } from "../Data/globalData";



export default function SocialProofMain() {

    const headerInformation = "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."
    const headerTitle = "10,000+ of our users love our products."

    return (
         <main>
             <section>
                  <header>
                      <h1> {headerTitle} </h1>
                      <CommunParagraph Text={headerInformation} />
                  </header>
                 <div>
                   {
                    ReviewData.map(({reviewText, id}) => {
                         return <ReviewComponent ReviewTitle={reviewText} key={id} />
                    })
                   }
                 </div>
             </section>
             <section>
                 {
                    CardData.map(({id, profilePhoto,userName,verified,informationQuote})  => {
                        return <ProfileCard key={id} profilePhoto={profilePhoto} userName={userName}
                         verified={verified} informationQuote={informationQuote} />
                    })
                 }
             </section>
         </main>
    )
}