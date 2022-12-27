import pic from "../images/user_pic.png"
import { ISoul } from "../models";

    const soulsExample: ISoul[] = [];
    for(let i = 0; i < 54; i++) {
        soulsExample.push({
            name: "Zero Corruption",
            address: "0xc631A4fd3bC7b7B14159C8976276f75BCEAe054a",
            img: pic,
            totalAum: 10000 + i,
            members: 2451 + i,
            diversity: 24000 + i,
            cases: 200 + i,
            positive: 180 + i,
            negative: 20 + i,
            upvotes: 2451 + i,
            downvotes: 20 + i,
        })
    } 


 

export default soulsExample;