import { Starts } from "../../Data/globalData"


const FiveStarts = () => {
  return (
    <div className="flex flex-row gap-[7px] items-center ">
      {
        Starts.map(({id,icon}) => (
          <img key={id} src={icon} alt="start-icon" width='14px' height='14px' />
        ))
      }
    </div>
  )
}

export default FiveStarts