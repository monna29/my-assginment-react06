import React, { use } from 'react';
import { Check } from 'lucide-react';
import Writing from "../../assets/products/writing_2327400 1.png"
import PremiumCard from '../PremiumCard/PremiumCard';


const Premium = ({cardPromise}) => {
    
    const data =use(cardPromise);
    
    return (
        <div>
          
         <PremiumCard data={data}></PremiumCard>
           
        </div>
    );
};

export default Premium;