
import WhatsAppButton from "@/components/WhatsAppButton";
import { Spotlight } from "@/components/ui/Spotlight";
// import { BackgroundGradient } from "@/components/ui/background-gradient";


function page() {
  return (
    <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white dark:bg-gray-900">
    <div
    className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto  md:py-0"
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-40"
        fill="white"
      />
      
        <div className=" mt-40 p-10 flex flex-col rounded-xl   
                 overflow-hidden h-full max-w-lg">
                 <h1 className="p-10 text-3xl font-bold mb-4 text-center">Contact Information</h1>      
<div className=" mb-4 flex flex-row  ">
    <h2 className="text-3xl font-semibold mb-2">✉️</h2>
    <p className="text-2xl">yadavbramhadev7@gmail.com</p>
  </div>
  <div className="mb-4 flex flex-row">
    <h2 className="text-3xl font-semibold mb-2">📞</h2>
    <p className="text-2xl">+919821310750</p>
  </div>
  <div className="mb-4 flex flex-row">
    <h2 className="text-3xl font-semibold mb-2">✔️</h2>
    <p className="text-2xl">Bhiwandi Vadpa Police Chowki Thapsi pada Mumbai Nashik Highway Near Indian Petrol pump (Gaurav Pump) Bhiwandi</p>
  </div>
  <WhatsAppButton />
       </div>
        </div>
       
    
          
            <div className="mt-4">
                {/* <Link href={"/courses"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Explore Works
                    </Button>
                </Link> */}
            </div>
        

      
        
        

   </main>
   
  )
}

export default page