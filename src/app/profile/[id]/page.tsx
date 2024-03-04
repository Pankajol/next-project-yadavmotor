export default function UserProfile ({params}:any){
    return(
        <div
        className="flex flex-col items-center
        justify-center min-h-screen py-2"
        >
           <h1> profile </h1>
           <hr />
           <h1>profile page <span className="">{params.id}</span></h1>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sunt voluptatem, illo dolorem, 
            architecto voluptates reiciendis fugiat cumque ea repellat, autem modi. Voluptas, ipsa voluptatibus aspernatur quas illo odio iusto.</p>
        </div>
    )
}