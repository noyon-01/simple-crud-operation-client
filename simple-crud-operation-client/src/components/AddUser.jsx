"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function AddUser({addNewUserAction}) {
  return (
    <Modal>
      <Button variant="secondary">Add User Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="pl-5 text-xl font-bold">
                Add a User
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={addNewUserAction} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="email"
                    type="email"
                    variant="secondary"
                  >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                  <TextField
                    className="w-full"
                    name="role"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Role</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Submit
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
