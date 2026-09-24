import { CloseButton, Dialog } from "@chakra-ui/react";
import ContactForm from "./ContactForm";

const ContactDialog = ({ openDialog, setOpenDialog }) => {
  return (
    <Dialog.Root
      open={openDialog}
      placement={"center"}
      onOpenChange={(e) => setOpenDialog(e.open)}
    >
      <Dialog.Backdrop />
      <Dialog.Positioner p={4}>
        <Dialog.Backdrop bg="blackAlpha.700" backdropFilter="blur(4px)" />
        <Dialog.Content rounded={"2xl"} w={"full"} maxW={"420px"}>
          <Dialog.Header>
            <Dialog.Title fontSize={"lg"} fontWeight={"bold"}>
              Thanks for reaching out!
            </Dialog.Title>
          </Dialog.Header>
          <Dialog.CloseTrigger asChild>
            <CloseButton
              size="sm"
              position="absolute"
              top="3"
              right="3"
              rounded={"lg"}
            />
          </Dialog.CloseTrigger>

          <Dialog.Body px={4} pb={6}>
            <ContactForm onSuccessClose={() => setOpenDialog(false)} />
          </Dialog.Body>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default ContactDialog;
