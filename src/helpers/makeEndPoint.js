import { dataText } from "../Core/core";


const makeEndPoint=(queries,pagination)=>{
    let endPoint='/api/products?populate=*';
    
    const filterCategory=parseInt(queries.get('categoryId'));
    if(filterCategory){
        endPoint+=`&filters[categories][id][0]=${filterCategory}`;
    }

    const sortSelect=queries.get('select');
    if(sortSelect){
        if(sortSelect===dataText.filterNames[1])
            endPoint+='&sort[0]=publishedAt:desc';
        if(sortSelect===dataText.filterNames[2])
            endPoint+='&sort[0]=price:asc';
        if(sortSelect===dataText.filterNames[3])
            endPoint+='&sort[0]=price:desc';
    }

    const minPrice=queries.get('minPrice');
    const maxPrice=queries.get('maxPrice');
    if(minPrice && maxPrice){
        endPoint+=`&filters[price][$lte]=${maxPrice}&filters[price][$gte]=${minPrice}`
    }

    const sortColor=queries.get('color');
    if(sortColor){
        endPoint+=`&filters[color][name][$in]=${sortColor}`;
    } 

    const sortSize=queries.get('sizes');
    if(sortSize){
        endPoint+=`&filters[size][name][$in]=${sortSize}`;
    }

    if(pagination){
    const pageQuery = parseInt(queries.get('page') || '1', 10);
        endPoint+=`&pagination[page]=${pageQuery}&pagination[pageSize]=12`;
    }
    
    return endPoint; 
}

export default makeEndPoint;