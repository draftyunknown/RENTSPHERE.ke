export default function handler(req, res){
  // Simulate STK Push request and return a fake transaction id
  if (req.method === 'POST'){
    const { phone, amount } = req.body || {}
    return res.status(200).json({ status: 'pending', message: 'STK Push simulated (demo)', transactionId: 'MPESA-' + Math.random().toString(36).slice(2,9) })
  }
  res.status(405).end()
}
