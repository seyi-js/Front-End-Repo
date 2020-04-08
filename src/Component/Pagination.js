import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const PageNumbers =[];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        PageNumbers.push(i);
    }
    return (
        <div className="container">
        <div className="row">
        <nav className="pagination col-md-6 col-sm-6 col-xs-12">
            {PageNumbers.map(number=>(
                <li key={number} className="page-item">
                    <a onClick={()=>{
                        paginate(number)
                    }} href="!#" className="page-link">
                        {number}
                    </a>
                </li>
            ))}
            
        </nav>
        </div>
        </div>
        
    )
}

export default Pagination;
