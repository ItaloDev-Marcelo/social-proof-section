import CommunParagraph from "../components/commun-paragraph-component";
import ProfileCard from "../components/profile-card";
import ReviewComponent from "../components/review-component";
import { CardData, ReviewData } from "../Data/globalData";



export default function SocialProofMain() {

    const headerInformation = "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services."
    const headerTitle = "10,000+ of our users love our products."

    return (
         <main className="font-League font-normal flex flex-col 
         justify-center items-center  p-7 lg:p-7 lg:mt-10
          ">
             <section className="  flex flex-col 
         justify-center items-center relative xl:right-7
          lg:flex lg:flex-row lg:justify-evenly  w-[100%]  ">
                  <header className="lg:w-[400px] text-center lg:text-left ">
                      <h1 className="text-normal-x3 xl:text-normal-x4 text-Magenta font-bold my-4"> {headerTitle} </h1>
                      <CommunParagraph Text={headerInformation} color='text-Dark-Grayish-Magenta' />
                  </header>
                 <div className=" my-4 review-row ">
                   {
                    ReviewData.map(({reviewText, id}) => {
                         return <ReviewComponent ReviewTitle={reviewText} key={id} />
                    })
                   }
                 </div>
             </section>
             
             <section  className="lg:flex lg:flex-row lg:justify-between lg:mt-2 xl:mt-3 card-row">
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