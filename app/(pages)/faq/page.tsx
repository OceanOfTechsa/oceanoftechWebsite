import { JSX } from "react"
import FAQView from "@/modules/clientModules/views/faqs-view";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "FAQ"
};

const FAQPage = ():JSX.Element => {
  return <FAQView />
}

export default FAQPage;