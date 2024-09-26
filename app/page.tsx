import  Appbar  from "@/components/Appbar";
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Homepage from "@/components/Homepage";
import Discount from "@/components/ui/Discount";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth"
import { signIn } from "next-auth/react";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      <Banner />
      {/* {JSON.stringify(session)} */}
      {/* adidas brand id:11950 */}
      <Homepage />
    </div>
  );
}