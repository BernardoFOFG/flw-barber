"use client"

import { Smartphone } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"
import { toast } from "sonner"

export const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso")
  }
  return (
    <div className="flex w-full items-center justify-between" key={phone}>
      <div className="flex gap-2.5">
        <Smartphone className="size-6 text-white" />
        <span className="text-sm">{phone}</span>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}
