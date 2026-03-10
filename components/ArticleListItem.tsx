import Link from 'next/link';
import type { ArticleItem}  from "@/types";
import {article} from "framer-motion/m";

interface Props{
    category: string
    articles: ArticleItem[]
}

const ArticleItemList =({category, articles }: Props) =>
{
    return (
        <div className="flex flex-col gap-5">
            <h2 className="font-cormorantGaramond text-4">{category}</h2>
            <div className="flex flex-col gap-2.5 font-poppins text-lg">
                {articles.map((articles,id) =>(
                    <Link
                    href={`/articles/${id}`}
                    key={id}
                    className="text-neutral-900 hover:text-amber-700 transition duration -150"
                    >
                        {articles.title}
                    </Link>
                ))}
            </div>
        </div>
    )

}

export default ArticleItemList
