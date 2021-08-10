/// <reference types="react" />
export declare type BadgeProps = ReactProps.Component & {
    /**
     * 標籤樣式
     * @default 'primary'
     */
    variant?: "primary" | "secondary" | "important";
    /**
     * 標籤是否圓形
     * @default false
     */
    pill?: boolean;
};
declare const Badge: ({ variant, pill, className, children, ...props }: BadgeProps) => JSX.Element;
export default Badge;
