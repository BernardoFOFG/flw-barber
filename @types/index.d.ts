import { Barbershop, BarbershopService } from "@prisma/client"

declare global {
  export interface BarbershopItemProps {
    barbershop: Barbershop
  }
  export interface BarbershopPageProps {
    params: {
      id: string
    }
  }

  export interface ServiceItemProps {
    service: BarbershopService
  }

  export interface PhoneItemProps {
    phone: string
  }
  export interface QuickSearchOption {
    imageUrl: string
    title: string
  }
}

export {}
