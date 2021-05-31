import React from 'react'
import cx from 'classnames'
import style from './Button.module.scss'

enum ButtonVariant {
    'primary',
    'secondary',
}

export type TButtonProps = {
    /** 按鈕類型，預設：button */
    as?: 'a' | 'button'
    /** 按鈕樣式，預設：primary */
    variant?: ButtonVariant
    /** 按鈕滿版，預設：false */
    block?: boolean
    /** 客製化 css class */
    className?: string | { [key: string]: boolean }
    /** 按鈕內容 */
    children: React.ReactNode
}

const Button: React.FC<TButtonProps> = ({
    as = 'button',
    variant = ButtonVariant.primary,
    block = false,
    className,
    children,
    ...props
}: TButtonProps) => {
    const Component = as
    return (
        <Component className={cx(style.wrapper, variant, { [style.block]: block }, className)} {...props}>
            {children}
        </Component>
    )
}

export default Button
