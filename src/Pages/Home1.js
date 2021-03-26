import React, {useRef} from 'react';
import image from './images.png';
import './Hom1.css';
import useWebAnimations, { rubberBand , bounce} from '@wellyshen/use-web-animations';
import './Hom1.css';
import Box from '@material-ui/core/Box';
import FooterPage from '../Components/Footer';
export default function Home1(){
    const { ref, playState, getAnimation } = useWebAnimations({ ...bounce });
    
    
return(
<div>
    <div>
    <h1>Welcome Usama,</h1>
    </div>
    <div >
        <div className='box'>
    <Box clone>
        <h1> Last Month sales: $12000</h1>
        </Box>
    </div>
        <div className='box'>
    <Box clone>
        <h1> Today's inventory count: 4000</h1>
</Box>
</div>
<div className='box'>

<Box clone>
        <h1> Inventory sold count: 278</h1>
</Box>

</div>
</div>

<div>
    <br/>
    </div>
    <img src={image} alt={"img"} className='Grapgh_img' />
<FooterPage/>
</div>




);
 }




