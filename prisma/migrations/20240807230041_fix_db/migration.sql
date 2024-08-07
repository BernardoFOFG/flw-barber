/*
  Warnings:

  - You are about to drop the column `barbershopId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `barbershopServiceId` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_barbershopId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_barbershopServiceId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "barbershopId",
DROP COLUMN "barbershopServiceId";

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "BarbershopService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
