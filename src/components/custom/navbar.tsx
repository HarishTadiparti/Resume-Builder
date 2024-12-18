import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function Navbar({ className }: { className: string }) {
    return (
        <div className={cn('px-3 py-3 w-full bg-[#2958EF] flex items-center justify-between', className)}>
            <h1 className='text-lg font-semibold text-white'>CV Builder</h1>
            <div className="flex items-center gap-1">
                <Button size='sm' variant='ghost' className="text-white">Log in</Button>
                <Button size='sm'>Sign Up</Button>
            </div>
        </div>
    )
}