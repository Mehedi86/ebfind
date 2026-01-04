import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-screen min-h-[350px] sm:min-h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/image/banner/banner3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </div>
      {/* <div className="w-full md:w-5/12 absolute z-40 bg-amber-800 p-4 md:p-6 text-white bottom-4 md:bottom-17 right-4 md:right-16">
        <p className="text-sm md:text-base">Donate blood, save lives. One small act can give someone a second chance. Join our blood donation campaign and be a hero today—your kindness can make a lifetime of difference. ❤️</p>
        <Button className="cursor-pointer rounded mt-2">Get Started</Button>
      </div> */}
    </div>
  )
}


