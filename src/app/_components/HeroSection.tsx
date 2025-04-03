import { HeroParallax } from "@/components/ui/hero-parallax";
import project1 from "../../../public/project1.png"
import project2 from "../../../public/project2.png"
import project3 from "../../../public/project3.png"
import firstsite from "../../../public/first-site.png"
import project4 from "../../../public/project4.png"


export default function HeroSection (){

    const products = [
        {
          title: "My first website",
          link: "https://github.com/14kgamers/Project-Jailson",
          thumbnail:
            firstsite,
        },
        {
          title: "PicaPau Project",
          link: "https://github.com/14kgamers/PicaPau",
          thumbnail:
            project1,
        },
        {
          title: "Game in C",
          link: "https://github.com/14kgamers/TicTacToe",
          thumbnail:
            project2,
        },
        {
          title: "Estacionamento C#",
          link: "https://github.com/14kgamers/Csharp_Estacionamento",
          thumbnail:
            project3,
        },        
        {
          title: "future project",
          link: "",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editrix.png",
        },
        
        {
          title: "future project",
          link: "",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
        },
        {
          title: "projeto guiado",
          link: "https://github.com/14kgamers/Project-Guide",
          thumbnail:
            project4,
        },
       
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
        },
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
        },
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
        },
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
        },
       
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
        },
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
        },
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
        },
        {
          title: "future project",
          link: "https://github.com/14kgamers",
          thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
        },
      ];
      
    return (
        <HeroParallax products={products}></HeroParallax>
    )
}