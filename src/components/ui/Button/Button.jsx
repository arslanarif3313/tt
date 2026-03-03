

export default function Button({ text, className = "", size = "md", ...props }) {
    const sizeClasses = {
        sm: "btn-sm text-sm px-4 py-2",
        md: "btn-md text-base px-6 py-3",
        lg: "btn-lg text-lg px-8 py-4"
    };

    return (
        <button 
            className={`btn btn-primary rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {text}
        </button>
    )
}
