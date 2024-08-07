import React from "react";
import "./card.css";
import ContactForm from "@/components/ContactForm";
import PageClient from "./page.client";

export async function generateStaticParams() {
  try {
    // Fetch all product items to get their ids
    const res = await fetch(process.env.NEXT_PUBLIC_API + "product");
    const data = await res.json(); // Ensure the path to results is correct
    const products = data.results;

    // Return an array of objects with id property
    return products.map((item: any) => ({
      productId: item.id.toString(), // Convert id to string if it's not
    }));
  } catch (error) {
    console.error("Error fetching product ids:", error);
    return []; // Return an empty array in case of an error
  }
}

const Page = ({ params }: any) => {
  const { productId } = params;
  return (
    <div className="card">
      <PageClient productId={productId} />
      <ContactForm />
    </div>
  );
};

export default Page;
