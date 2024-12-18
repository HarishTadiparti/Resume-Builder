import ResumeCard from "@/components/custom/resume-card";

export default function MyResumePage() {
    return (
        <div className="space-y-2">
            <h1 className="text-xl">My Resume</h1>
            <div className="flex items-start gap-4 overflow-y-auto">
                <ResumeCard title="Hareesh CV" lastUpdated="2 days" />
                <ResumeCard title="Hareesh CV 1" lastUpdated="2 days" />
                <ResumeCard title="Hareesh CV" lastUpdated="2 days" />
                <ResumeCard title="Hareesh CV 1" lastUpdated="2 days" />
                <ResumeCard title="Hareesh CV" lastUpdated="2 days" />
                <ResumeCard title="Hareesh CV 1" lastUpdated="2 days" />
                <ResumeCard title="Hareesh CV" lastUpdated="2 days" />
                <ResumeCard title="Hareesh CV 1" lastUpdated="2 days" />
            </div>
        </div>
    )
}