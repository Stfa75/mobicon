import Image from "next/image";
import Burger from"./components/Burgermenu"
import Rum from"./components/rum-komponent"
import For from"./components/forudindstillet-komponent"
import Lys from "./components/Stue-lys-komponent"


export default function VarmeApp(){

  return(
    <>
    <header>
     <Burger /> 
    </header>
    <main>
    <Rum />
    <For />
    < Lys />
    </main>
   
    </>



  )
}