"use client";
import { useParams } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import productsData from "../../../../data.json";
import Image from "next/image";

export interface ImageType {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Product {
  id: string;
  name: string;
  image: ImageType;
}

const products: Product[] = productsData;

const ProductPage: FC = () => {
  const params = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const p = products.find((product) => product.id === params.id);

    if (p) {
      setProduct(p);
    } else {
      setError("Product not found");
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1200px] min-h-screen mt-10">
        <div className="flex justify-between items-center gap-10">
          <div>
            <Image
              src={
                product?.image?.desktop ||
                "/assets/images/image-baklava-desktop.jpg"
              }
              width={250}
              height={200}
              alt="ff"
            />
          </div>
          <div>{product?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
