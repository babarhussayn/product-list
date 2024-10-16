// import  {Stripe}  from "stripe";
// import { NextRequest, NextResponse } from "next/server";

//  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: NextRequest) {

//   const payload=await req.text();
//   const response =JSON.parse(payload)
//   const sig =req.headers.get('stripe-signature');
//   const dateTime =new Date(response?.created *1000).toLocaleDateString()
//    const timeString= new Date(response?.created * 1000).toLocaleDateString()

//    try{
//     let event =stripe.webhooks.constructEvent(payload,sig!,process.env.STRIPE_SECRET_KEY!)
//    }
//    catch(err){
//     console.log(err);
//    }
//   // try {
//   //   const { amount } = await req.json();

//   const session = await stripe.checkout.sessions.create({

//   })

//   //   const paymentIntent = await stripe.paymentIntents.create({
//   //     amount: amount,
//   //     currency: "usd",
//   //     automatic_payment_methods: { enabled: true },
//   //   });
//   //   return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   // } catch (err) {
//   //   console.log(err);
//   //   return NextResponse.json(
//   //     { error: `internal server error: ${err}` },
//   //     { status: 500 }
//   //   );
//   // }
// }
