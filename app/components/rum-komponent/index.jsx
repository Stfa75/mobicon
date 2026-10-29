
import Image from "next/image"
import "./rum.css"
export default function Rum(){

return (
<>
<div className="wrapper">
    
<article className="dropdown">
    <p className="overskrift1">Rum</p>
    <p>Vis alle</p>  
<Image 
src= "/icon_drop-down.png"
alt="et billede af en sofastol"
width={11}
height={7}
/>
</article>
<article className="spaces">
    <div className="seng">
<Image 
src= "/icon_bedroom.png"
alt="et billede af et bad"
width={20}
height={20}
/>
<p>Soveværelse</p>
</div>
<div className="stol">
<Image 
src= "/icon_living-room.png"
alt="et billede af en sofastol"
width={20}
height={20}
/>
<p>Stue</p>
</div>
<div className="bad">
<Image 
src= "/icon_bathroom.png"
alt="et billede af en seng"
width={20}
height={20}
/>
<p>Badeværelse</p>
</div>
</article>
</div>
</>
)}