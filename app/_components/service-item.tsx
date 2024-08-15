import Image from "next/image"
import React from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

export const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex gap-3 p-3">
        <div className="relative max-h-[134px] min-h-[134px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="rounded-xl object-cover shadow-shape"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-x-2">
            <h3 className="text-sm font-semibold">{service.name}</h3>
            <p className="!ml-0 text-sm text-gray-400">{service.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-semibold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </span>
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
