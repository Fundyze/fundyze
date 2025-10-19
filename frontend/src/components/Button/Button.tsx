import styles from './Button.module.css';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'tertiary'; // Button style variants
    size?: 'sm' | 'md' | 'lg'; // Button sizes
    customStyle?: React.CSSProperties; // Custom styles
    disabled?: boolean; // Disabled state
    onClick?: () => void; // Click event handler
    children: React.ReactNode; // Button content
}

const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
};

const sizeClasses = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
};

/**
 * Button component for user interactions
 * @param variant Button style variant (primary, secondary, tertiary)
 * @param size Button size (sm, md, lg)
 * @param customStyle Custom styles for the button
 * @param disabled Whether the button is disabled
 * @param onClick Click event handler
 * @param children Button content
 */
export default function Button({
    variant = 'primary',
    size = 'md',
    customStyle,
    disabled = false,
    onClick,
    children,
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${variantClasses[variant]} ${sizeClasses[size]}`}
            disabled={disabled}
            onClick={onClick}
            style={customStyle}
        >
            {children}
        </button>
    );
}