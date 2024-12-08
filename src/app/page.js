import Image from "next/image";

import PaymentCard from "@/components/payment";

export default function Home() {
  return (
    <div className="py-20 lg:p-24 px-3">
      <PaymentCard />
    </div>
  );
}
