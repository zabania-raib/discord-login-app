import { auth, signIn, signOut } from "@/auth"

export default async function Page() {
  const session = await auth()

  if (session?.user) {
    return (
      <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
        <h1>Welcome, {session.user.name}</h1>
        <p>Email: {session.user.email}</p>
        <img
          src={session.user.image}
          alt={`${session.user.name}'s avatar`}
          style={{ borderRadius: '50%', width: '75px', height: '75px' }}
        />
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <button style={{ marginTop: '20px', padding: '10px' }} type="submit">
            Sign Out
          </button>
        </form>
      </div>
    )
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Discord Login App</h1>
      <p>Please sign in to continue.</p>
      <form
        action={async () => {
          "use server"
          await signIn("discord")
        }}
      >
        <button style={{ padding: '10px' }} type="submit">
          Sign In with Discord
        </button>
      </form>
    </div>
  )
}
