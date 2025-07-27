// Content.tsx
import {  Copy, CopyCheck } from "lucide-react";
import React, { useState, type ReactNode } from "react";
import { Button } from "valkoma-package/primitive";

type ContentProps = {
    type?:
    | "title"
    | "description"
    | "header1"
    | "header2"
    | "header3"
    | "header4"
    | "header5"
    | "header6"
    | "paragraph"
    | "bold"
    | "bold-medium"
    | "italic"
    | "strikeThrough"
    | "list"
    | "callout"
    | "blockquote"
    | "span"
    | "date"
    | 'code-block'
    ;
    variant?: "bullet" | "number"; // for lists
    language?: string;
    children: ReactNode;
};

export const Content: React.FC<ContentProps> = ({ type, variant, language, children }) => {
    switch (type) {
        case "title":
            return <h1 className="!text-4xl !text-[#101828] dark:!text-white !font-bold !mb-4">{children}</h1>;
        case "description":
            return <p className="!text-[#71717b] dark:!text-white/80  !mb-6">{children}</p>;
        case "header1":
            return <h1 className="!text-3xl !text-[#101828] dark:!text-white !font-semibold !mb-2">{children}</h1>;
        case "header2":
            return <h2 className="!text-2xl !text-[#101828] dark:!text-white !font-semibold !mb-2">{children}</h2>;
        case "header3":
            return <h3 className="!text-xl !font-semibold dark:!text-white !text-[#101828] !mb-2">{children}</h3>;
        case "header4":
            return <h4 className="!text-lg !font-semibold dark:!text-white !text-[#101828] !mb-1">{children}</h4>;
        case "header5":
            return <h5 className="!text-base !font-semibold dark:!text-white !text-[#101828] !mb-1">{children}</h5>;
        case "header6":
            return <h6 className="!text-sm !font-semibold dark:!text-white !text-[#101828] !mb-1">{children}</h6>;
        case "bold":
            return <strong>{children}</strong>;
        case "bold-medium":
            return <span className="!font-medium">{children}</span>;
        case "italic":
            return <em>{children}</em>;
        case "strikeThrough":
            return <s>{children}</s>;

        case "span":
            return <span>{children}</span>;

        case "code-block": {
            const [copied, setCopied] = useState(false);
            const code = String(children);
            const lang = language || "javascript";

            const handleCopy = () => {
                navigator.clipboard.writeText(code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            };

            return (
                <div className="relative mb-6 rounded-md overflow-hidden border bg-muted p-2">
                    <div className="flex justify-between items-center px-4 py-2 !bg-muted/60 !text-xs !font-semibold uppercase !text-muted-foreground">
                        <span>{lang}</span>
                        <Button
                            onClick={handleCopy}
                            variant="ghost"
                            size="sm"
                            className="text-xs size-2 px-2 py-0 h-auto"
                        >
                            {copied ? <CopyCheck size={20} /> : <Copy size={20} />}
                        </Button>
                    </div>
                    <div className="p-3">
                        <pre className="!whitespace-pre-wrap text-sm font-mono leading-snug">
                            {code}
                        </pre>
                    </div>
                </div>
            );
        }


        case "blockquote":
            return (
                <blockquote className="border-l-4 !font-medium py-2 !border-gray-300 dark:!border-gray-600 pl-4 italic !text-[#101828] mb-4">
                    {children}
                </blockquote>
            );

        case "callout":
            return (
                // <Callout className="mb-4" variant="default">
                <span>
                    callout pending
                    {children}
                </span>
                // </Callout>
            );

        case "list":
            if (variant === "number") {
                return <ol className="list-decimal ml-6 mb-4 flex flex-col gap-2">{children}</ol>;
            }
            return <ul className="list-disc ml-6 mb-2 flex flex-col gap-2">{children}</ul>;

        case "date":
            try {
                return (
                    <p className="text-sm text-muted-foreground mb-4">
                        {children}
                    </p>
                );
            } catch {
                return <p className="text-sm text-red-500">Invalid date</p>;
            }

        default:
            return <p className="mb-4 !leading-relaxed !text-[#364153] dark:!text-white/70">{children}</p>
    }
};
