export default function UserProfile ({params}:any){
    return(
        <div
        className="flex flex-col items-center
        justify-center min-h-screen py-2"
        >
           <h1> profile </h1>
           <hr />
           <h1>Welcome , <span className="">{params.id}</span></h1>
           <p>
            ThankYou login.
           </p>
        </div>
    )
}