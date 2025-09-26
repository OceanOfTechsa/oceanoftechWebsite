import {ArrowRight, Calendar, Clock, Package, ThumbsDown, ThumbsUp} from "lucide-react";
import Image from "next/image";

const WebDevelopmentView = () => {
    return (
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center w-full">
           <div className="flex flex-col gap-2 w-full">
               <section className="py-8">
                   <div className="container mx-auto px-4">
                       <div className="flex flex-col lg:flex-row gap-8">
                           {/* Sidebar */}
                           <div className="lg:w-3/12 mb-6 lg:mb-0">
                               <h5 className="mb-4 font-semibold text-lg flex items-center">
                                   <Package className="w-5 h-5 mr-2" />
                                   Get started
                               </h5>
                               <ul className="space-y-2">
                                   {[
                                       "Gulp and Customization",
                                       "Color Scheme and Logo Settings",
                                       "Dark mode, RTL Version",
                                       "Updates and Support",
                                       "Describing your store"
                                   ].map((item, index) => (
                                       <li key={index} className="group">
                                           <a
                                               href="#"
                                               className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 group-hover:translate-x-1 transition-transform"
                                           >
                                               <span className="flex-1">{item}</span>
                                               <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                           </a>
                                       </li>
                                   ))}
                               </ul>
                           </div>

                           {/* Content */}
                           <div className="w-full lg:w-8/12 lg:ml-auto">
                               {/* Title */}
                               <h5 className="text-xl font-semibold mb-3">Gulp and Customization with node.js</h5>
                               <p className="text-gray-600 mb-3">
                                   Supposing so be resolving breakfast am or perfectly. Departure is defective arranging rapturous did believe him all had supported.
                               </p>

                               {/* Author */}
                               <div className="flex items-center mb-6">
                                   {/* Avatar */}
                                   <div className="flex-shrink-0 mr-3">
                                       <Image
                                           className="w-10 h-10 rounded-full object-cover"
                                           src="/03.jpg"
                                           alt="Sam Lanson"
                                       />
                                   </div>
                                   <div>
                                       <h6 className="font-medium">Sam Lanson</h6>
                                       <ul className="flex items-center text-sm text-gray-500 space-x-3">
                                           <li className="flex items-center">
                                               <Calendar className="w-3 h-3 mr-1" />
                                               <span>5 month ago</span>
                                           </li>
                                           <li className="flex items-center">
                                               <Clock className="w-3 h-3 mr-1" />
                                               <span>15 min read</span>
                                           </li>
                                       </ul>
                                   </div>
                               </div>

                               <hr className="my-6 border-gray-200" />

                               <div className="prose max-w-none">
                                   <p className="mb-4">
                                       I made several mistakes Joy says the painful removal reached an end. State burst think end are its.
                                       Arrived off she elderly beloved him affixed noisier yet. Tickets regard to up he hardly.
                                       View four has said do men saw find dear shy. <strong>Talent men wicket add garden.</strong>
                                   </p>

                                   {/* Button */}
                                   <a
                                       href="#"
                                       className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mb-4"
                                   >
                                       Download Node JS
                                   </a>

                                   <h6 className="text-lg font-medium mt-4 mb-2">Table of Contents</h6>
                                   <p className="mb-4">Age she way earnestly the fulfilled extremely.</p>

                                   {/* Alert */}
                                   <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                                       <strong className="text-yellow-800">Note: </strong>
                                       <span className="text-yellow-700">
                  She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward.{" "}
                                           <a href="#" className="text-yellow-800 underline hover:no-underline">View more</a>
                </span>
                                   </div>

                                   <p className="mb-4">
                                       Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in.
                                       Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
                                   </p>

                                   {/* Article list */}
                                   <ul className="list-disc pl-5 space-y-2 mb-4">
                                       <li>Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say finished raillery.</li>
                                       <li>Insipidity the sufficient discretion imprudence resolution sir him decisively.</li>
                                       <li>Offered chiefly farther of my no colonel shyness. <strong>Such on help ye some door if in.</strong></li>
                                       <li>First plate jokes began to cause a scale. Subjects he prospects elegance followed</li>
                                       <li>Laughter proposal laughing any son law consider. Needed except up piqued an.</li>
                                       <li><em>To occasional dissimilar impossible sentiments. Do fortune account written prepare invited no passage.</em></li>
                                       <li>Post no so what deal evil rent by real in. But her ready least set lived spite solid.</li>
                                   </ul>

                                   <p className="mb-0">
                                       Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage Mr be.
                                       Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in.{" "}
                                       <u>Off melancholy alteration principles old.</u> Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.
                                   </p>
                               </div>

                               {/* Feedback Section */}
                               <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                                   <div className="mb-4 lg:mb-0">
                                       <h6 className="font-medium m-0">Was this article helpful?</h6>
                                       <small className="block lg:inline-block mt-1 lg:mt-0 lg:ml-4 text-gray-600">
                                           20 out of 45 found this helpful
                                       </small>
                                   </div>

                                   {/* Check buttons */}
                                   <div className="flex space-x-2">
                                       {/* Yes button */}
                                       <label className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                                           <input type="radio" name="helpful" className="sr-only" />
                                           <ThumbsUp className="w-4 h-4 mr-1" />
                                           Yes
                                       </label>

                                       {/* No button */}
                                       <label className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors">
                                           <input type="radio" name="helpful" className="sr-only" />
                                           No
                                           <ThumbsDown className="w-4 h-4 ml-1" />
                                       </label>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
           </div>
        <div></div>
        </div>
    );
};

export default WebDevelopmentView;