export default function NavBar() {
    return (
        <section className="p-2">
            <div className="h-10 w-full rounded-md border border-black items-center justify-center text-center content-center flex flex-row gap-10">
                <a href="/"><h1>Home</h1></a>
                <a href="/"><h1>ATS Friendly</h1></a>
                <a href="/"><h1>Job Align</h1></a>
            </div>
        </section>
    )
}