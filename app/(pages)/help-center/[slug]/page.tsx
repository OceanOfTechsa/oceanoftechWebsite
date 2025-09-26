import {JSX} from "react";
import HelpArticleDetailsView from "@/modules/clientModules/views/help-article-details-view";

interface HelpDetailsPageProps {
    params: {slug: string; };
}

const HelpArticleDetailsPage = ({ params }: HelpDetailsPageProps): JSX.Element => {
    return <HelpArticleDetailsView title={decodeURIComponent(params.slug)} />
}

export default HelpArticleDetailsPage;