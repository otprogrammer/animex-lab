"use client"
import React from 'react'
import CardModal from '../card/CardModal'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AnimeModal() {
    const id = useSearchParams().get("id")
  const router = useRouter()
  console.log(id)
  return (
    <div>{id && (

        <CardModal
          id={id}
          handleClose={() => router.replace("/",{scroll:false})}
        />
      )}</div>
  )
}
