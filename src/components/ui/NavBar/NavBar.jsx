import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';
import NewEvent from '../NewEvent';


function NavLink({ title, link }) {
  return (
    <a href={link} className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
      {title}
    </a>
  );
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="container mx-auto px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <NavLink title="Home" link="#"/>
          <NavLink title="Events" link="#" />
          <NavLink title="About" link="#" />
        </div>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen} className="max-w-md max-h-min">
          <AlertDialogTrigger asChild>
            <Button onClick={() => setIsOpen(true)}>New Event</Button>
          </AlertDialogTrigger>
          <AlertDialogContent >
            <AlertDialogHeader>
              <AlertDialogTitle>Create New Event</AlertDialogTitle>
            </AlertDialogHeader>
            <NewEvent onClose={handleClose} />
            <AlertDialogFooter>
              <AlertDialogAction onClick={handleClose}>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </nav>
  )
}

export default NavBar