import { ImBlocked } from "react-icons/im";

interface ContentNotFoundProps {
    details: string
}

const ContentNotFound = ({details} : ContentNotFoundProps) => {
    return (
        <div className="text-center py-10">
            <ImBlocked className="text-[#0B9944] text-5xl mx-auto" />
            <h5 className="mt-4 text-lg font-medium text-[#606261] dark:text-[#c4c5c7]">
                {details}
            </h5>
        </div>
    );
};
export default ContentNotFound;