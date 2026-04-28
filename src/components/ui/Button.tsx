import React from "react";
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center font-medium rounded-full tranition-all duration-300 cursor-pointer cursor-pointer focus:outline-none disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                primary: "bg-primary border-2 border-primary hover:bg-primary-hover hover:border-primary-hover text-primary-foreground",
                secondary: "bg-secondary border-2 border-secondary hover:bg-secondary-hover hover:border-secondary-hover text-secondary-foreground",
                danger: "bg-danger border-2 border-danger hover:bg-danger-hover hover:border-danger-hover text-danger-foreground",
                outline: "bg-transparent border-2 border-primary text-white hover:border-primary-hover",
                ghost: "bg-transparent hover:bg-secondary/30 text-foreground"
            },
             size: {
                sm: "px-4 py-1.5 text-sm",
                md: "px-6 py-2.5 text-base",
                lg: "px-8 py-3.5 text-lg",
            },
            fullWidth: {
                true: "w-full"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            fullWidth: false  
        }
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants>{
    isLoading?: boolean;
}

export default function Button({
    className,
    variant,
    size,
    fullWidth,
    isLoading,
    children,
    disabled,
    ...props
}: ButtonProps) {
     return (
        <button
            className={cn(buttonVariants({ variant, size, fullWidth }), className)}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {children}
        </button>
    );
}