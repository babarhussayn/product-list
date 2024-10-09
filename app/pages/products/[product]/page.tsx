// "use client";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import products from "../../../../data.json";
// import Image from "next/image";

// const ProductPage = () => {
//   console.log(products);
//   const params = useParams();
//   const [product, setProduct] = useState<any>(null);

//   useEffect(() => {
//     const p = products?.find((product) => product.id === params.id);
//     setProduct(p);
//   }, []);

//   return (
//     <>
//       <div className="w-full flex justify-center">
//         <div className="w-[1200px] min-h-screen mt-10">
//           <div className="flex justify-between items-center gap-10">
//             <div>
//               <Image src={product?.image} width={250} height={200} alt="img" />
//             </div>
//             <div>{product?.name}</div>
//             <div>{product?.category}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductPage;
