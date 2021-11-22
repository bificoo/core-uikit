export declare type ButtonProps = {
    /**
     * 按鈕樣式
     * @default 'primary'
     */
    variant?: "primary" | "secondary" | "transparent" | "important";
    /**
     * 按鈕滿版
     * @default false
     */
    block?: boolean;
    /**
     * ButtonGroup使用
     */
    eventKey?: ReactProps.EventKey;
} & JSXProps.ButtonElement;
declare const Button: ({ variant, block, className, children, eventKey, onClick, ...props }: ButtonProps) => JSX.Element;
export default Button;
