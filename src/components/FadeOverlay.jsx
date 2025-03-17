
function FadeOverlay() {
    return (
        <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-10">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#8ad9cc] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-[#e5f1f2] to-transparent" />
        </div>
    )
}

export default FadeOverlay