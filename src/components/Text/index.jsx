import styles from "./text.module.css";

const Text = ({ children, className, ...props }) => {
    return (
        <p className={`${styles.text} ${className}`} {...props}>
            {children}
        </p>
    );
};

export default Text;
