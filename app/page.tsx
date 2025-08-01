

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers';

export default async function EventsPage() {
 const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
 const { data } = await supabase.from('events').select()
 const todos =   [
  {
    id: "ba7d7f74-b9aa-4c3f-9c15-bcc115b1f111",
    title: "Free Event A",
    description: "Open for all users",
    event_date: "2025-08-05 10:00:00",
    image_url: "https://t3.ftcdn.net/jpg/01/70/26/08/240_F_170260833_vbS1wr88qZkVaWjC5FjmBo5MLf9Oxs1i.jpg",
    tier: "free",
  },
  {
    id: "b1b3c49d-fd0a-4c13-893b-86b04dcf1b12",
    title: "Free Event B",
    description: "Beginner's open workshop",
    event_date: "2025-08-07 15:00:00",
    image_url: "https://via.placeholder.com/300x180",
    tier: "free",
  },
  {
    id: "3e99ed11-5275-45a1-b7e5-98fc29a4b013",
    title: "Silver Event A",
    description: "Exclusive to Silver+ members",
    event_date: "2025-08-09 13:30:00",
    image_url: "https://via.placeholder.com/300x180",
    tier: "silver",
  },
  {
    id: "c02c0d1b-20e1-4f87-89d3-3a7cf1a5e614",
    title: "Silver Event B",
    description: "Silver tier networking meetup",
    event_date: "2025-08-10 18:00:00",
    image_url: "https://via.placeholder.com/300x180",
    tier: "silver",
  },
  {
    id: "9dc7760b-4b62-4c53-a44a-d5e18227c815",
    title: "Gold Event A",
    description: "Advanced training session",
    event_date: "2025-08-11 11:00:00",
    image_url: "https://via.placeholder.com/300x180",
    tier: "gold",
  },
  {
    id: "2b0a964e-71ae-4a23-bde3-cf5f0213b216",
    title: "Gold Event B",
    description: "Gold members hackathon",
    event_date: "2025-08-12 09:00:00",
    image_url: "https://via.placeholder.com/300x180",
    tier: "gold",
  },
  {
    id: "bc7b4fc2-d9e7-4e6e-94b6-6b13fcb16e17",
    title: "Platinum Event A",
    description: "Platinum roundtable session",
    event_date: "2025-08-13 14:00:00",
    image_url: "https://via.placeholder.com/300x180",
    tier: "platinum",
  },
  {
    id: "4f3e9d56-87df-4ff4-9f99-b0ecfcb10a18",
    title: "Platinum Event B",
    description: "VIP networking dinner",
    event_date: "2025-08-15 19:00:00",
    image_url: "https://via.placeholder.com/300x180",
    tier: "platinum",
  },
]



 

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {todos?.length >0 ?todos?.map((event) => (
          <li key={event.id} className="border p-4 rounded-md">
            <img src={event.image_url} alt={event.title} className="rounded mb-2" />
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p className="text-sm text-gray-600">{event.description}</p>
            <p className="text-xs text-gray-400 mt-1">{new Date(event.event_date).toLocaleString()}</p>
            <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded">
              Tier: {event.tier}
            </span>
          </li>
        )):(<>no data</>)}
      </ul>
    </div>
  )
}
