import ProfilePhotoColton from '../assets/images/image-colton.jpg'
import ProfilePhotoIrene from '../assets/images/image-irene.jpg'
import ProfilePhotoAnne from '../assets/images/image-anne.jpg'
import startIcon from '../assets/images/icon-star.svg';
import type { CardFormate, ReviewFormate, StartFormate } from '../global-types'



export const ReviewData:ReviewFormate[]  = [
    {
      id: 0,
      reviewText: 'Rated 5 Stars in Reviews'
    },
    {
      id: 1,
       reviewText: 'Rated 5 Stars in Report Guru' 
    },
    {
      id: 2,
       reviewText: 'Rated 5 Stars in BestTech' 
    }
]



const quote0 = ' "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'
const quote1 = ' "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'
const quote2 = ' "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'



export const CardData:CardFormate[] = [
    {
      id: 0,
      profilePhoto: ProfilePhotoColton,
      userName: ' Colton Smith ',
      verified: 'Verified Buyer',
      informationQuote: quote0 
    },
     {
      id: 1,
      profilePhoto: ProfilePhotoIrene,
      userName: 'Irene Roberts ',
      verified: 'Verified Buyer',
      informationQuote: quote1
    },
     {
      id: 2,
      profilePhoto: ProfilePhotoAnne,
      userName: 'Anne Wallace ',
      verified: 'Verified Buyer',
      informationQuote: quote2
    }
]

export const Starts:StartFormate[] = [
    {
      id: 0,
      icon: startIcon
    },
    {
      id: 1,
      icon: startIcon
    },
    {
      id: 2,
      icon: startIcon
    },
    {
      id: 3,
      icon: startIcon
    },
    
    {
      id: 4,
      icon: startIcon
    }
]