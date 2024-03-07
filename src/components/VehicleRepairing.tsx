'use client'
import Link from "next/link"
import vehicleData from "../data/yadavmotors.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface vehicle{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
        
}

function VehicleRepairing() {
   const VehicleRepairing =  vehicleData.vehicles.filter((vehicle:vehicle)=>vehicle.isFeatured)
  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className=" text-teal-400 font-semibold tracking-wide
                uppercase text-3xl">Vehicle Repairing</h2>
                <p className="mt-2 text-3xl leading-8
                font-extrabold tracking-tight text-white
                sm:text-4xl"></p>

            </div>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-3 gap-8 justify-center">

                {VehicleRepairing.map((vehicle:vehicle)=>(
                <div key={vehicle.id} className="flex justify-center">
                 <BackgroundGradient
                 className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900
                 overflow-hidden h-full max-w-sm"
                 >
                   <div className="p-4 sm:p-6 flex flex-col items-center text-center
                   flex-grow">
                    <div className="overflow-hidden rounded-2xl"><img className="h-60 w-60  object-cover" src={`${vehicle.image}`} alt="vehicle-img"  /></div>
                    
                    <p>{vehicle.title}</p>
                    <p>{vehicle.description}</p>
                    <Link href='/services'>
                        See More 
                    </Link>

                   </div>
                </BackgroundGradient>
                </div>

                ))}
            </div>

        </div>
        <div className="mt-20 text-center">
            <Link href={"/services"}
            className="px-4 py-2 bg-black rounded-md hover:bg-teal-400
            transition duration-200"
            >
                View All services
            </Link>
        </div>  
    </div>
  )
}

export default VehicleRepairing