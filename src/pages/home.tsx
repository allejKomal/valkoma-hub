// components/Home.tsx
import { MoveUpRight } from "lucide-react";
import { Badge, Button } from "valkoma-package/primitive";
import { useNavigate } from "react-router-dom";

type BlogMetadata = {
    date: string;
    title: string;
    description: string;
    tags: string[];
    url: string;
};

type BlogCardProps = BlogMetadata;

function BlogCard({ title, date, description, tags, url }: BlogCardProps) {
    const navigate = useNavigate();


    return (
        <div className="flex items-center justify-between pr-10 border-b">
            <div className="rounded-md p-6 flex flex-col gap-2 w-[800px]">
                <p className="text-sm text-muted-foreground font-medium">{date}</p>
                <span className="text-xl font-medium">{title}</span>
                <span className="text-sm mb-4">{description}</span>
                <div className="flex gap-2 -mt-2">
                    {tags.map((tag) => (
                        <Badge variant="secondary" key={tag} className="uppercase">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
            <Button variant="outline" onClick={() => navigate(`/${url}`)}>
                <MoveUpRight className="w-4 h-4" />
            </Button>
        </div >
    );
}

function Home() {
    const content: BlogMetadata[] = [
        {
            date: "27-07-2025",
            title: "Vite + Tailwind CSS + ShadCN + TypeScript Boilerplate",
            description: `Starting a new project? Here's a clean and scalable boilerplate to kickstart your frontend apps using Vite, Tailwind CSS, ShadCN UI, and TypeScript. This setup is optimized for speed, flexibility, and component reusability.`,
            tags: ["fe", 'shadcn', 'library'],
            url: "shadcn-vite",
        },
    ];

    return (
        <div className="p-10">
            <div>
                <span className="text-5xl p-6 font-bold">Knowledge Hub</span>
            </div>
            <div>
                {content.map((blog) => (
                    <BlogCard
                        key={blog.title}
                        date={blog.date}
                        description={blog.description}
                        title={blog.title}
                        tags={blog.tags}
                        url={blog.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
