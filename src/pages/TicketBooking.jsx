import { useState } from "react";
import { Container, VStack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const TicketBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Ticket Booked:", { name, email, event, tickets });
  };

  return (
    <Container centerContent>
      <VStack spacing={6} width="100%" maxW="container.md" mt={10}>
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="event" isRequired>
              <FormLabel>Event</FormLabel>
              <Input type="text" value={event} onChange={(e) => setEvent(e.target.value)} />
            </FormControl>
            <FormControl id="tickets" isRequired>
              <FormLabel>Number of Tickets</FormLabel>
              <Input type="number" value={tickets} onChange={(e) => setTickets(e.target.value)} min={1} />
            </FormControl>
            <Button colorScheme="teal" size="lg" type="submit">Book Ticket</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default TicketBooking;