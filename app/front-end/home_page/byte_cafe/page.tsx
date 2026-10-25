export default function ByteCafe() {
    return (
        <div id="wd-byte_cafe" className="flex w-full flex-col items-start gap-4">
            <button className="m-4 rounded-[1vw] border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300">
                Back
            </button>
            <div className="flex w-full items-center justify-center gap-4">
                <h1 className="text-4xl font-extrabold">Byte Cafe</h1>
                <img src="/photos/placeholder.jpeg" width="100" alt="Placeholder Image" />
            </div>
        </div>
    );
}