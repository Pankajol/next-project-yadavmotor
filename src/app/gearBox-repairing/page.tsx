// import VehicleRepairing from "@/components/VehicleRepairing"
'use client'
import Link from "next/link"
import serviceData from "../../data/services.json"
import { BackgroundGradient } from "../../components/ui/background-gradient"
import { Spotlight } from "@/components/ui/Spotlight"


interface service{
    id: number,
    title: string,
    slug: string,
    description: string,
    isFeatured: boolean,
    image: string
        
}

// function page() {
//     const Services =  serviceData.services.filter((service:service)=>service.isFeatured)
//     return (
        
//     //   <div className="mt-40 bh-">
     

//         //   <div className="mt-10">
//               <BackgroundGradient className=" mt-40  grid  sm:grid-row
//               lg:grid-row justify-center text-white ">
//           <div>
//               <div className="text-center">
//                   <h2 className="text-base text-teal-400 font-semibold tracking-wide
//                   uppercase">GearBox Repairing</h2>
//                   <p className="mt-2 text-3xl leading-8
//                   font-extrabold tracking-tight text-white
//                   sm:text-4xl">All types of commercial vehicles </p>
  
//               </div>
//           </div>
  
//                   {Services.map((service:service)=>(
//                   <div key={service.id} className="flex  justify-center">
                  
//                      <div className="p-4 sm:p-6 w-auto h-full gap-4 flex flex-row items-center text-center
//                      flex-grow">
//                       <div className="overflow-hidden bg-black  rounded-2xl"><img className=" " src={`${service.image}`} alt="vehicle-img"  /></div>
//                       <div className="overflow-hidden  ">
//                       <p className="">{service.title}</p>
//                       <p className=" mt-10 sm:text-2xl">{service.description}</p>
//                       <Link href={`/vehicles/${service.slug}`}>
//                           See More
//                       </Link>
//                       </div>
  
//                      </div>
//                   </div>
                 
  
//                   ))}
//               </BackgroundGradient>
  
//         //   {/* </div> */}
          
          
//     //   </div>
    
//     )
// }
function page() {
    const Services =  serviceData.services.filter((service:service)=>service.isFeatured)
    return (
        <div className="py-40 bg-gray-900">
             <div className="text-center">
                   <h2 className="text-base text-teal-400 font-semibold tracking-wide
                   uppercase">GearBox Repairing</h2>
                   <p className="mt-2 text-3xl leading-8
                   font-extrabold tracking-tight text-white
                   sm:text-4xl">All types of commercial vehicles </p>
  
               </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                {Services.map((service:service)=>(
                    <div key={service.id} className="flex justify-center">
                        <div className="p-4 sm:p-6 w-auto h-full gap-4 flex flex-col items-center text-center flex-grow text-white rounded-lg">
                            <div className="overflow-hidden bg-black rounded-lg">
                                <img className="" src={`${service.image}`} alt="vehicle-img" />
                            </div>
                            <div className="overflow-hidden">
                                <p className="mt-4 text-xl font-bold">{service.title}</p>
                                <p className="mt-2 text-sm sm:text-base">{service.description}</p>
                                <Link href={`/vehicles/${service.slug}`} className="mt-2 text-teal-400 hover:text-teal-600">
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default page