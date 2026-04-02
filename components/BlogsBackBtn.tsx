'use client'

import React from 'react'
import {ChevronLeft} from "lucide-react";
import {useRouter} from "next/navigation";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

const BlogsBackBtn = () => {
    const router = useRouter();
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            className={"flex items-center  mr-2 cursor-pointer"}
            onClick={router.back}
          >
            <ChevronLeft size={18} />
            Back
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p className={"mb-0 text-white dark:text-black"}>Go Back</p>
        </TooltipContent>
      </Tooltip>
    );
}
export default BlogsBackBtn
