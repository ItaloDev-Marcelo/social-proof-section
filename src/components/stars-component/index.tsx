import { Starts } from "../../Data/globalData"


const FiveStarts = () => {
  return (
    <div>
      {
        Starts.map(({id,icon}) => (
          <img key={id} src={icon} alt="start-icon" />
        ))
      }
    </div>
  )
}

export default FiveStarts