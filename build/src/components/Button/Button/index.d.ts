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
    /**
     * 按鈕是否為選取的狀態
     * @default false
     */
    selected?: boolean;
    /**
     * ButtonGroup使用
     */
    eventKey?: ReactProps.EventKey;
} & JSXProps.ButtonElement;
declare const Button: ({ variant, selected, block, className, children, eventKey, onClick, ...props }: ButtonProps) => JSX.Element;
export default Button;
