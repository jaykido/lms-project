import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    {param}: {param: {courseId: string; chapterId: string}}
) {
    try {
        const {userId} = auth()
        if(!userId){
            return new NextResponse("Un-authorized!", {status: 401})
        }
        
        const CourseOwner = 
    } catch (error) {
        console.log("Chapter Publish", error)
        return new NextResponse("Internal Error!", {status: 500})
    }
}