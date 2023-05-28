import { useState } from 'react'

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpen = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return {
    isModalOpen,
    handleOpen,
    handleOk,
    handleCancel,
  }
}
