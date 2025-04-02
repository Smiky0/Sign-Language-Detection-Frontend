export default function Navbar() {
    return (
        <div className="flex items-center justify-start p-2 sm:p-6">
            <img
                src="/logo.png"
                width={50}
                height={50}
                className="m-2 sm:mr-6"
            />
            <span className="capitalize w-1/2 text-xl sm:text-3xl tracking-tight cursor-pointer font-semibold text-balance">
                Sign Language Detection
            </span>
        </div>
    );
}
