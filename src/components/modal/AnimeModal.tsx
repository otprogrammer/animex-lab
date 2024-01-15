"use client"
import React from 'react'
import CardModal from '../card/CardModal'
import { useRouter, useSearchParams } from 'next/navigation'
import { useModal } from '../../../store/store'

export default function AnimeModal() {
    // const id = useSearchParams().get("id")
  const router = useRouter()
  const {isModal,id,disableIsModal} = useModal()
  console.log(isModal)
  console.log(id)
  return (
    <div>{isModal && (

        <CardModal
          id={id}
          handleClose={disableIsModal}
        />
      )}</div>
  )
}
