// Simple in-memory store used when Supabase is not configured
let PROPERTIES = [
  {
    id: 'demo-1',
    title: '3-Bedroom Apartment',
    city: 'Upper Hill, Nairobi',
    price: 100000,
    forRent: true,
    rentType: 'per_month',
    images: ['/demo/apt1.jpg']
  },
  {
    id: 'demo-2',
    title: '4-Bedroom House',
    city: 'Kitisuru, Nairobi',
    price: 18500000,
    forRent: false,
    images: ['/demo/house1.jpg']
  }
]

export function listProperties(){
  return PROPERTIES
}

export function addProperty(p){
  p.id = 'p-' + Math.random().toString(36).slice(2,9)
  PROPERTIES = [p, ...PROPERTIES]
  return p
}
