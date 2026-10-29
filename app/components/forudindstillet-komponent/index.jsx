import Image from "next/image"
import "./Forud.css"

export default function Forud(){

return(

<>
<div className="wrapper">
  <p className="overskrift">Forudindstillet</p>
  <article className="forud">
<div className="homeOn">
  <Image 
src= "/icon_home_on.png"
alt="et billede af en sofastol"
width={40}
height={40}
/>  
<p>Hjemme</p>
</div>
<div className="homeOff">
  <Image 
src= "/icon_home_off.png"
alt="et billede af en sofastol"
width={40}
height={40}
/>  
<p>Ude</p>
</div>
<div className="sover">
  <Image 
src= "/icon_sleep_off.png"
alt="et billede af en sofastol"
width={40}
height={40}
/>  
<p>Sover</p>
</div>
</article>
</div>


</>



)}