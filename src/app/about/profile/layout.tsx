export default function ProileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Title</h1>
            <div>{children}</div>
        </>
    );
}