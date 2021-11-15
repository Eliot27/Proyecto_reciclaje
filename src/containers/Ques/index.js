import styles from "./ques.module.css";

const Ques = ({ children, className, ...props }) => {
    return (
        <div className={`${styles.notice} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Ques;