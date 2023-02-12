import { aircraft, airport, travel } from "../../constants/images"

const deals: { id: number, img: string, title: String, desc: string }[] = [
  {
    id: 1,
    img: aircraft,
    title: "100% Free Cancellation on 3 Flights & 5 Hotels",
    desc: "Pay $4,50 & Save upto $50* per year +Welcome Bonus of $200 Cash Vouchers",
  },
  {
    id: 3,
    img: airport,
    title: "100% Free Cancellation on 3 Flights & 5 Hotels",
    desc: "Pay $4,50 & Save upto $50* per year +Welcome Bonus of $200 Cash Vouchers",
  },
  {
    id: 2,
    img: travel,
    title: "100% Free Cancellation on 3 Flights & 5 Hotels",
    desc: "Pay $4,50 & Save upto $50* per year +Welcome Bonus of $200 Cash Vouchers",
  },
]

const offers: number[] = [100, 140, 90];

export {
  deals,
  offers
}