'use client'
import repairingservicesData from "@/data/repairs.json"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import { Button } from "@/components/ui/moving-border"

interface Repairs {
  id: number;
  isFeatured: boolean;
  title: string;
  button: string;
  image: string;
  description: string;
  steps: string[];
}

function Page() {
  const RepairingServices = repairingservicesData.repair.filter((repairs: Repairs) => repairs.isFeatured)

  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white dark:bg-gray-900 py-5">
      {RepairingServices.map((repairs: Repairs) => (
        <div key={repairs.id} className="flex flex-col items-center justify-center p-4 gap-4 sm:flex-col">                  
        <h1 className="text-black dark:text-blue-300 uppercase text-3xl m-5 ">{repairs.title}</h1>
          <div className="w-full sm:w-1/2">
            <BackgroundGradient className="rounded-5xl overflow-hidden">
              <img className="w-full h-auto rounded-3xl" src={repairs.image} alt="gearbox-image" />
            </BackgroundGradient>
          </div>
          
          <div className="mt-5 sm:mt-0 w-full sm:w-1/2"> 
            <h1 className="text-black dark:text-white uppercase text-2xl">{repairs.description}</h1>
            <div className="mt-5">
              <p className="text-black dark:text-white uppercase text-xl">{repairs.steps}</p>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                  <span>Click for repairing</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
