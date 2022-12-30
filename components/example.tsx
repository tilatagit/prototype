import pic from "../images/user_pic.png"
import pic2 from "../images/user_pic2.png"
import AntiScam from "../images/AntiScam.png"
import { IJurisdiction, IModule, ISoul, ISoulProfile } from "../models";

    const soulsExample: ISoul[] = [{
        name: "Zero Corr" ,
        address: "0xc631A4fd3bC7b7B14159C8976276f75BCEAe054a",
        img: pic,
        totalAum: 10000 ,
        members: 2451 ,
        diversity: 24000 ,
        cases: 200 ,
        positive: 180 ,
        negative: 20 ,
        upvotes: 2451 ,
        downvotes: 20 ,
    }, {
        name: "Fabo Liebs" ,
        address: "0xBA8E0D813D3F5Fb36F7aD1946740b08310Cc58C8",
        img: pic2,
        totalAum: 10000 ,
        members: 2451 ,
        diversity: 24000 ,
        cases: 200 ,
        positive: 180 ,
        negative: 20 ,
        upvotes: 2451 ,
        downvotes: 20 ,
    }];
    for(let i = 1; i <= 233; i++) {
        soulsExample.push({
            name: "Zero Corruption " + i,
            address: "0xc331A4fd3bC7b7B14159C8976276f75BCEAe054a",
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


    export const profileExample: ISoulProfile = {
        soul: soulsExample[0],
        description: "Designer | Developer",
        links: {
            facebook: "2",
            linkedin: "3",
            twitter: "4",
            github: "5"
        }
    }
    profileExample.soul.cases = 0;

    
export {soulsExample, moduleExample, jurisdictionExample};

 

