import {Metadata} from "next";
import {getGooglePage} from "@/app/lib/action";
import {Suspense} from "react";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function () {
  return <div className="w-full">
    <Suspense fallback={"pending..."}>
      <Sub/>
    </Suspense>
  </div>
}


async function Sub() {
  const proxyHtml = await getGooglePage();
  console.log(proxyHtml.text);
  return <div className="w-full">
    <div dangerouslySetInnerHTML={{__html: proxyHtml.text}}></div>
  </div>
} 