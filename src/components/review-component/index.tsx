import type { ReviewProps } from "../../global-types";
import FiveStarts from "../stars-component";


export default function ReviewComponent({ReviewTitle}:ReviewProps) {
    return (
         <article>
              <FiveStarts  />
              <h2>{ReviewTitle}</h2>
         </article>
    )
}