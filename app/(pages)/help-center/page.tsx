import {JSX} from "react";
import HelpCenterView from "@/modules/clientModules/views/help-center-view";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Help Center"
};

const HelpCenterPage = (): JSX.Element => {
    return <HelpCenterView />
};

export default HelpCenterPage;