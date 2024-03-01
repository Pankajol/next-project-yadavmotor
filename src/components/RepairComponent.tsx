// 'use client'
// import Link from "next/link"
// import { Button } from "./ui/moving-border";
// import { BackgroundGradient } from "@/components/ui/background-gradient"
// import repairingservicesData from "../data/repairs.json"
// import { MovingBorder } from "./ui/moving-border"

// interface Repairs {
//   id : number;
//   isFeatured : boolean;
//   title : string;
//   button : string;
//   image : string;
//   description : string;
//   steps : string[];
// }

// interface  gearbox{
//   description:string,
//   steps:string,

// }
// function RepairComponent() {

//   const RepairingServices = repairingservicesData.repair.filter((repairs:Repairs) => repairs.isFeatured)
//   // console.log(typeof(RepairingServices))

 

//   return (
    
//     <div className="py-40  justify-center  h-full bg-gray-100">
      
//       {/* { RepairingServices.map((repairs:Repairs)=>( */}
//                  <div  key={repairs.id} className="justify-center p-4 gap-4 h-full sm:grid grid-flow-col sm:justify-center sm:items-center sm:h-full  ">                  
//                       <div className=" ">
//         <BackgroundGradient className="flex ">
//        <img
//           className="h-auto w-auto rounded-3xl sm:rounded-3xl overflow-hidden "
//           src={`${repairs.image}`} alt="gearbox-image" />
//     </BackgroundGradient>
//                      </div> 

//                        <div className="mt-5 sm:mt-0 h-80"> 
//       <h1 className="text-black dark:text-white uppercase text-2xl">{repairs.description} mh</h1>
//      <div className="mt-5" >
//      <p className="text-black dark:text-white uppercase text-xl">{repairs.steps}</p>
//      </div>
//      <div className="mt-4">
//                 <Link href={"/contact"}
                
//                 >
//                     <Button
//                     borderRadius="1.75rem"
//                     className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
//                     >
//                     <span className="">Click for repairing</span>
//                     </Button>
//                 </Link>
//             </div>
//                       </div> 
   
//                   </div>
     
// //        )) 
// //       }
// //      </div>
//     // <div className="py-40 bg-gray-900">
//     //          <div className="text-center">
//     //                <h2 className="text-base text-teal-400 font-semibold tracking-wide
//     //                uppercase">GearBox Repairing</h2>
//     //                <p className="mt-2 text-3xl leading-8
//     //                font-extrabold tracking-tight text-white
//     //                sm:text-4xl">All types of commercial vehicles </p>
  
//     //            </div>
//     //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
//     //             {RepairingServices.map((service:repairs)=>(
//     //                 <div key={service.id} className="flex justify-center">
//     //                     <div className="p-4 sm:p-6 w-auto h-full gap-4 flex flex-col items-center text-center flex-grow text-white rounded-lg">
//     //                         <div className="overflow-hidden bg-black rounded-lg">
//     //                             <img className="" src={`${service.image}`} alt="vehicle-img" />
//     //                         </div>
//     //                         <div className="overflow-hidden">
//     //                             <p className="mt-4 text-xl font-bold">{service.title}</p>
//     //                             <p className="mt-2 text-sm sm:text-base">{service.description}</p>
//     //                             <Link href={`/vehicles/${service.slug}`} className="mt-2 text-teal-400 hover:text-teal-600">
//     //                                 See More
//     //                             </Link>
//     //                         </div>
//     //                     </div>
//     //                 </div>
//     //             ))}
//     //         </div>
//     //     </div>
//   )
// }

// export default RepairComponent