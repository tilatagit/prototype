import pic from "../images/user_pic.png"
import AntiScam from "../images/AntiScam.png"
import { IJurisdiction, IModule, ISoul } from "../models";

    const soulsExample: ISoul[] = [];
    for(let i = 0; i < 25; i++) {
        soulsExample.push({
            name: "Zero Corruption " + i,
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

    const moduleExample: IModule[] = [
    {    name: "Polygon",
        amountProjects: 12,},
        {    name: "Ethereum",
        amountProjects: 12,},
        {    name: "Optimism",
        amountProjects: 12,}
    ];

    const jurisdictionExample: IJurisdiction = {
        name: 'AntiScam',
        address: '0xc631A4fd3bC7b7B14159C8976276f75BCEAe054a',
        slogan: 'A place where justice prevails',
        img: AntiScam,
        pending: 100,
        positive: 20000,
        negative: 3000,
        denied: 2000,
        upvotes: 18600,
        downvotes: 1200,
        cases: [{q:1},{q:2},{q:3}]
    }

    
export {soulsExample, moduleExample, jurisdictionExample};

 

