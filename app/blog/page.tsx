"use client";

import React from "react";
import { Button } from "@nextui-org/button";

import { Sheet, SheetBody, SheetContent, SheetFooter, SheetHeader, useDisclosure } from "@/components/sheet";

export default function BlogPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onClose = () => {
	return
  }

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Sheet
        backdrop="opaque"
        placement="right"
        size="sm"
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <SheetContent>
          {(onClose:any) => (
            <>
              <SheetHeader className="flex flex-col gap-1">Modal Title</SheetHeader>
              <SheetBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                  quam.
                </p>
              </SheetBody>
              <SheetFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}