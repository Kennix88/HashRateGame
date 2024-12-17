import Information from './_components/Information'
import Profile from './_components/Profile'

export default function Page() {
  return (
    <div className="flex flex-col gap-2">
      <Profile />
      <Information />
    </div>
  )
}
