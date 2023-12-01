import { UserButton, SignIn } from "@clerk/nextjs";
 
// export default function Home() {
//   return (
//     <div>
//       <UserButton afterSignOutUrl="/"/>
//     </div>
//   )
// }

export default function Page() {
    return <SignIn/>
}