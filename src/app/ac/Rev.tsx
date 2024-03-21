'use client'
import { Button } from '@nextui-org/react'
import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Rev() {
  const router = useRouter()
  return (
    <Button onClick={() => router.refresh()}>revalidate</Button>

  )
}
