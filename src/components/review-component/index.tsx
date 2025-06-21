import type { ReviewProps } from "../../global-types";
import FiveStarts from "../stars-component";


export default function ReviewComponent({ReviewTitle}:ReviewProps) {
    return (
         <article className="flex flex-col justify-center my-2 lg:flex-row lg:justify-evenly
          gap-2 items-center w-[327px] h-[80px]
           lg:w-[355px] lg:h-[50px]
          xl:w-[400px] xl:h-[50px] rounded-[7px] bg-Grayish-Magenta ">
              <h2 className="text-normal text-Magenta font-bold">
                <strong>{ReviewTitle}</strong>
              </h2>
               <FiveStarts  />
         </article>
    )
}