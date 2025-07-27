
const BlogWrapper = ({ children, title = "Title Here", description = "description here", authorName = "", date = "" }: { children: React.ReactNode, title?: string, description?: string, authorName?: string, date?: string }) => {
    return (
        <div className="w-full h-screen">
            <div className="fixed top-0 left-0 h-screen w-[500px] bg-background  p-10 z-10 flex flex-col gap-4">
                <h1 className="max-w-3xl !text-4xl !font-bold !text-balance">
                    {title}
                </h1>
                <h3 className="!text-muted-foreground dark:!text-white/70">
                    {description}
                </h3>
                <div className="flex flex-col !text-sm md:text-base mt-4">
                    <span className="!font-semibold !text-xl">{authorName}</span>
                    <span className="">on {date}</span>
                </div>
            </div>

            <div className="ml-[550px] h-screen overflow-y-auto p-10">
                <div className="prose dark:prose-invert mx-auto flex flex-col gap-2">
                    {children}
                </div>
            </div>
        </div>


    );
};

export { BlogWrapper };
