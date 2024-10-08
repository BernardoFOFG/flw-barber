import React from "react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { HomeIcon, CalendarIcon, LogOutIcon } from "lucide-react"
import { quickSearchOptions } from "../_constants/search"
import { Button } from "./ui/button"
import Image from "next/image"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

export const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader className="text-left">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center gap-3 border-b border-border py-5">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/58271658?v=4" />
        </Avatar>
        <div>
          <p className="font-bol">Bernardo Filipe</p>
          <p className="text-xs">bernardofofg@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-border py-5">
        <SheetClose asChild>
          <Button className="justify-start gap-2" variant="ghost" asChild>
            <Link href="/">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <CalendarIcon size={18} />
          Agendamentos
        </Button>
      </div>
      <div className="flex flex-col gap-2 border-b border-border py-5">
        {quickSearchOptions.map((option) => (
          <Button
            className="justify-start gap-2"
            variant="ghost"
            key={option.title}
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-2 py-5">
        <Button className="justify-start gap-2" variant="ghost">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}
