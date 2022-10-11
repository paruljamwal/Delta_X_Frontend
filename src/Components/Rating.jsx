import React, { useState } from 'react'
import { MdOutlineStarOutline} from 'react-icons/md';

const Rating = () => {
 let [star,setStar]=useState([<MdOutlineStarOutline/>,<MdOutlineStarOutline/>,<MdOutlineStarOutline/>,<MdOutlineStarOutline/>,<MdOutlineStarOutline/>]);
 let [rate,setRate]=useState(false);
    return (
    <div>
        {
            star?.map((e)=>(
                e
            ))
        }
    </div>
  )
}

export default Rating;