import React from "react";
import Travel1 from "./Travel1";

const travelList = [
{
	destination: 'Dubai',
	country: 'Italie',
	distance: '1215km',
	image: "https://image.noelshack.com/fichiers/2019/15/2/1554804903-burjkhalifa.jpg"
},
{
	destination: 'Mongolia',
	country: 'Italie',
	distance: '1215km',
	image: "https://image.noelshack.com/fichiers/2019/15/2/1554804903-burjkhalifa.jpg"
}, 
{
	destination: 'Bahrain',
	country: 'Italie',
	distance: '1215km',
	image: "https://image.noelshack.com/fichiers/2019/15/2/1554804903-burjkhalifa.jpg"
},
{
	destination: 'Los Angeles',
	country: 'Italie',
	distance: '1215km',
	image: "https://image.noelshack.com/fichiers/2019/15/2/1554804903-burjkhalifa.jpg"
},
{
	destination: 'California',
	country: 'Italie',
	distance: '1215km',
	image: "https://image.noelshack.com/fichiers/2019/15/2/1554804903-burjkhalifa.jpg"
},

];

const Travel = () =>(
	<div>
		{travelList.map(element =>(
			<Travel1 image = {element.image} destination = {element.destination} country = {element.country} distance = {element.distance}/>
		))}
	</div>
	)


export default Travel;

