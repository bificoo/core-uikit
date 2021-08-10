/// <reference types="react" />
export declare type ButtonProps = {
    /**
     * 按鈕樣式
     * @default 'primary'
     */
    variant?: "primary" | "secondary" | "important";
    /**
     * 按鈕滿版
     * @default false
     */
    block?: boolean;
} & JSXProps.ButtonElement;
declare const Button: ({ variant, block, className, children, ...props }: ButtonProps) => JSX.Element;
export default Button;
