import { SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, user</h2>
        <p>dia de hoje</p>

        <div className="mt-6 flex items-center gap-2">
          <Input className="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-1.svg"
            fill
            className="rounded-xl object-cover"
            alt="Agende nos mehlores com FSW Barber"
          />
        </div>
      </div>
    </div>
  )
}
