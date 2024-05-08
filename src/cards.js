import './App.css';
import React from "react";
import cfmoto from "../src/assets/cfmoto1.jpg";
import ducati from "../src/assets/ducati1.jpg";
import f900 from "../src/assets/f9001.jpg";
import kove from "../src/assets/kove1.jpg";
import nx500 from "../src/assets/nx5001.jpg";
import voguerally1 from "../src/assets/voguerally1.jpg";





function Card(props) {
    return (
        <div className ="card">
            <div className ="cardContent">
                <img src={props.imageUrl} alt={props.imageAlt}></img>
            </div>
            <h3 className ="cardTittle">{props.title}</h3>
            <p className ="cardText">{props.text}</p>
            <div>
                <a href={props.link}>{props.linkText}</a>
            </div>
        </div>
    )
}

function CardList () {

    const cardData = [

        {
            imageUrl: cfmoto,
            imageAlt: "moto Cf Moto 450",
            title: "Cf Moto 450 MT",
            text: "Diseñada para redefinir el turismo de aventura, la 450MT combina la capacidad multiterreno con una versatilidad inigualable. Reduciendo el peso sin comprometer la potencia, su aclamado motor ofrece un rendimiento sensible y un amplio par motor, garantizando una conducción estimulante en todo momento.",
            link: "https://cfmotocolombia.com/motos-cfmotos/450mt-sport/",
            linkText: "Mas Informacion"
        },
        {
            imageUrl: ducati ,
            imageAlt: "Ducati Hypermotard 698 mono",
            title: "Ducati Hypermotard 698 mono",
            text: "Sube a bordo y deja que la diversión se haga cargo. La nueva Hypermotard 698 Mono es la primera Supermotard monocilíndrica de carretera de Ducati, nacida con un solo objetivo: transmitir emoción dominando la escena. Sencilla, ligera y ágil, es una auténtica “fun bike” con ADN de competición. ",
            link: "https://www.ducati.com/es/es/motocicletas/hypermotard/hypermotard-698-mono",
            linkText: "Mas Informacion"
        },
        {
            imageUrl: f900,
            imageAlt: "Bmw f900 gs",
            title: "Bmw f900 gs",
            text: "Así que aquí es donde empieza tu próxima aventura, que te llevará donde casi nadie es capaz de llegar. Excepto tú y tu GS. Sobre piedras y grava, a través del viento y el agua, cruzando zanjas profundas y las colinas más altas. Alegría en el corazón, arena entre los dientes, adrenalina en la sangre: totalmente inmerso en tu elemento y siguiendo la llamada del #SpiritOfGS.. ",
            link: "https://www.bmw-motorrad.co/es/models/adventure/f900gs.html#/section-lo-mas-destacado-de-la-f-900-gs",
            linkText: "Mas Informacion"
        },
        {
            imageUrl: kove,
            imageAlt: "KOVE 450 RALLY REGULAR EDITION",
            title: "KOVE 450 RALLY REGULAR EDITION",
            text: "Del desierto a la calle, una moto con el espíritu Rally apta para rodar en la ciudad. Chasis con un marco ergonómico que brinda una sensación más cómoda en todo tipo de terreno, ágil y de bajo peso que permite mayor maniobrabilidad; un modelo especial para los amantes del Off Road.. ",
            link: "https://kovemotocolombia.com/kove-450-rallyregular-edition/",
            linkText: "Mas Informacion"
        },
        {
            imageUrl: voguerally1,
            imageAlt: "VOGE 300 Rally",
            title: "VOGE 300 Rally",
            text: "¿Una moto para uso diario y con características casi de enduro? Sí, la Voge 300 Rally. Una moto para el día a día sin tener que renunciar a un uso urbano y con la que podrás divertirte por carreteras llenas de curvas, y no solo eso, además, sus usuarios experimentados la han proclamado unánimemente como la moto trail más divertida que puedas encontrar y con la que vas a disfrutar sin límites en el off road sin preocupaciones por pesos elevados o componentes delicados que puedan amargarte el día.",
            link: "https://vogespain.es/modelos/300-rally/",
            linkText: "Mas Informacion"
        },
        {
            imageUrl: nx500,
            imageAlt: "NX 500 Modelo 2024",
            title: "HONDA NX 500 Modelo 2024",
            text: "La nueva NX 500 es ideal para introducirse en caminos que antes solo veías en una pantalla. Sus suspensiones de largo recorrido, su chasis reforzado, su rueda delantera de 19 pulgadas, su parabrisas alto, hacen que esta moto resuelva la mayoría de tus deseos dentro o fuera de la carretera. La Crossover de entrada por excelencia.",
            link: "https://motos.honda.com.co/motos-honda/aventura/NX-500",
            linkText: "Mas Informacion"
        }

    ];
    return (
        <div className='cards-container'>
            {cardData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );  
}


export default CardList;