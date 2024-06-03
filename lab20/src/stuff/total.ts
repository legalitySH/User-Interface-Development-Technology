import movies from "./movies";
import series from "./series";
import episode from "./episode";

type content= {
    Title:string,
    Year:string,
    Type:string,
    Poster:string
}

export let total: content[] = movies.concat(series).concat(episode);