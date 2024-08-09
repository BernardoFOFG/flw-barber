import { SearchIcon } from "lucide-react"
import { Header } from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

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

        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-1 flex-col gap-2 border-r border-border py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="size-6">
                  <AvatarImage src="https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">2024</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
