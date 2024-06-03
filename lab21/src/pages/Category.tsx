import React, {FC} from "react";
import Card from "./card";
import {MovieType} from "../api/api";
type content= {
    Title:string,
    Year:string,
    Type:string,
    Poster:string
}
type Props={
    type:string
    movies:MovieType[];
}
const Category:FC<Props>= (props)=>{
    const {type, movies} = props;
    const row:any[]=[];
    let index:number=0;

    let isExists = true;

    if(typeof(movies) == 'undefined')
    {
        isExists = false;
    }
    else
    {
        movies.map((el)=>{
            row.push(
                <Card Title={el.Title} Year={el.Year} Type={el.Type} Poster={el.Poster} key={index}/>
            )
            index++;
        })
    }

    
    
    return(
        <div className="Movies">
            <h1 className="headerText">{type}</h1>
            <div className="stuffs">
                {isExists ? (
                    row
                ) : (
                    <p>По запросу ничего не  найдено</p>
                )}
            </div>
        </div>
    )
}
export default Category;