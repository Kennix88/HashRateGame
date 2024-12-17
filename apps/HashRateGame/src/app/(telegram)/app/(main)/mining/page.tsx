import Condition from './_components/Condition'
import Profile from './_components/Profile'

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <Profile />
      <Condition />
    </div>
  )
}
