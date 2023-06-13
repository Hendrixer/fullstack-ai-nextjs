import { SignIn } from '@clerk/nextjs'

export default function SigninPage() {
  return <SignIn signUpUrl="/sign-up" />
}
