import React, {FC} from 'react'
type content= {
    Title:string,
    Year:string,
    Type:string,
    Poster:string,
    key:number
}

const Card:FC<content> = (props)=>{
    const alter:string = "img";
    const{Title, Year, Type, Poster, key} = props
    return(
        <div className="Card" key={key}>
            <div className="wrapper">
                <img src={Poster} alt={alter}/>
            </div>
            <div className="info">
                <h1>{Title}</h1>
                <p>{Year}<span > {Type}</span></p>
            </div>
        </div>
    )
}
export default Card;