import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

export const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.svg" alt="FSW Barber" height={18} width={120} />
        <Button size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
