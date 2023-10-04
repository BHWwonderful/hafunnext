import { useRouter } from "next/router";

export default function usePageNavigation(){
  const router = useRouter();

  const handleChangeRoute = (event: any, path: string) => {
    router.push(`${path}`)
  }

  return handleChangeRoute
}