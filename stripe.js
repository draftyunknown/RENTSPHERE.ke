export default function handler(req, res){
  // Simulate a card payment (MasterCard demo)
  if (req.method === 'POST'){
    const { amount, card } = req.body || {}
    return res.status(200).json({ status: 'succeeded', chargeId: 'CARD-' + Math.random().toString(36).slice(2,9) })
  }
  res.status(405).end()
}
