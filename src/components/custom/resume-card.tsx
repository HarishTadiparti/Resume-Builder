export default function ResumeCard({ title, lastUpdated }: { title: string, lastUpdated: string }) {

    return (
        <div className="min-w-[210px] p-2 rounded-md border">
            <div className="bg-slate-200 w-full h-[210px]"></div>
            <div className="mt-2">
                <h1 className="text-[14px]">{title}</h1>
                <p className="text-xs text-muted-foreground">{`Last Updated ${lastUpdated}`}</p>
            </div>
        </div>
    )
}