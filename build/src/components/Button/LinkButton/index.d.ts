/// <reference types="react" />
export declare type LinkButtonProps = {
    /**
     * 按鈕樣式
     * @default 'primary'
     */
    variant?: "primary";
} & JSXProps.AElement;
declare const Button: ({ variant, className, children, ...props }: LinkButtonProps) => JSX.Element;
export default Button;
